import { db } from "@/app/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PROD as string, {
  apiVersion: "2022-11-15",
});

async function readStream(readableStream: ReadableStream) {
  const reader = readableStream.getReader();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    result += new TextDecoder("utf-8").decode(value);
  }

  return result;
}

let event;
let eventType;
let data;

export async function POST(request: any) {
  console.log("Reached here");
  const rawBody = await readStream(request.body);
  const signature = request.headers.get("stripe-signature");
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    return NextResponse.json({
      status: 400,
      error: "Webhook Error: Invalid Signature",
    });
  }

  data = event.data;
  eventType = event.type;
  console.log("WEBHOOK RECEVIED:", event.data);
  console.log("--------------------------------------------------");
  console.log(eventType);
  switch (eventType) {
    case "checkout.session.completed":
      const paymentIntent = event.data.object as Stripe.Checkout.Session;
      const customerId = paymentIntent.customer;
      const subscriptionId = paymentIntent.subscription;
      const user_ref = paymentIntent.client_reference_id as string;
      const sessionId = paymentIntent.id;
      let purchasedMembership;
      const lineItems = await stripe.checkout.sessions.listLineItems(
        sessionId,
        { limit: 3 }
      );
      lineItems.data.forEach((data) => {
        purchasedMembership = data.description;
      });

      // update the document

      try {
        console.log(subscriptionId);
        console.log(event.data.object);
        console.log("PURCHASED PRODUCT:", purchasedMembership);
        const docRef = doc(db, "users", user_ref);

        if (purchasedMembership === "Premium Annually") {
          await updateDoc(docRef, {
            annualMembership: true,
            customerId,
            subscriptionId,
          });
        }
        if (purchasedMembership === "Premium Monthly") {
          console.log("Updating ");
          await updateDoc(docRef, {
            monthlyMembership: true,
            customerId,
            subscriptionId,
          });
          console.log("Successfully updated");
        }
      } catch (err) {
        console.log("Error updating document:", err);
      }
      break;

    case "customer.subscription.deleted":
      console.log("A cutomer has cancelled their subscription");

      break;
    case "invoice.paid":
      // Continue to provision the subsc  ription as payments continue to be made.
      // Store the status in your database and check when a user accesses your service.
      // This approach helps you avoid hitting rate limits.
      break;
    case "invoice.payment_failed":
      // The payment failed or the customer does not have a valid payment method.
      // The subscription becomes past_due. Notify your customer and send them to the
      // customer portal to update their payment information.
      break;
    default:
    // Unhandled event type
  }

  return NextResponse.json({ status: 200 });
}
