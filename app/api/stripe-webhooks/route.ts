import { db } from "@/app/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(
  "sk_test_51NRABnHvKmtkdhL0Mbn3QbJHYmVnVWujFYy6nNR97R5P437NAB17Xtla4mWDrwRiR2AWRL0XlQ23ODJUtFAAE70c00sGpdyEVS",
  {
    apiVersion: "2022-11-15",
  }
);

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
const endpointSecret =
  "whsec_97b6d02817425ff50b3bf27f247ea5cb8c540bfdbc2a6c92c0325bb73727d72e";

export async function POST(request: any) {
  const rawBody = await readStream(request.body);
  const signature = request.headers.get("stripe-signature");
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
  } catch (err) {
    return NextResponse.json({
      status: 400,
      error: "Webhook Error: Invalid Signature",
    });
  }

  data = event.data;
  eventType = event.type;

  switch (eventType) {
    case "checkout.session.completed":
      const paymentIntent = event.data.object as Stripe.Checkout.Session;
      const customerId = paymentIntent.customer;
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
        console.log("PURCHASED PRODUCT:", purchasedMembership);
        const docRef = doc(db, "users", user_ref);
        if (purchasedMembership === "Premium Annually") {
          updateDoc(docRef, { annualMembership: true, customerId });
        }
        if (purchasedMembership === "Premium Monthly") {
          updateDoc(docRef, { monthlyMembership: true, customerId });
        }
      } catch (err) {
        console.log("Error updating document:", err);
      }
      // Payment is successful and the subscription is created.
      // You should provision the subscription and save the customer ID to your database.
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
