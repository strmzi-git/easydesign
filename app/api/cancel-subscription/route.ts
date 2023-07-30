import { db } from "@/app/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  console.log("Endpoint hit");
  const { subscriptionId, user, user_ref } = await request.json();

  console.log("Subscription canceling api params:", subscriptionId, user_ref);
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PROD as string, {
      apiVersion: "2022-11-15",
    });
    const response = await stripe.subscriptions.cancel(subscriptionId!);
    const status = response.status;
    if (status == "canceled") {
      const subscriptionType = response.items;
      const interval = subscriptionType.data[0].plan.interval;
      const docRef = doc(db, "users", user_ref);
      if (interval === "year") {
        // Remove annual subscription
        updateDoc(docRef, {
          annualMembership: false,
          customerId: "",
          subscriptionId: "",
        });
      }
      if (interval === "month") {
        // REmove monthly subscription
        const docRef = doc(db, "users", user_ref);
        updateDoc(docRef, {
          monthlyMembership: false,
          customerId: "",
          subscriptionId: "",
        });
      }

      // Find user and update their subscription
    }
  } catch (err: any) {
    console.log(err.message);
    NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
  return NextResponse.json({
    status: 200,
    message: "Successfully cancelled subscription",
  });
}
