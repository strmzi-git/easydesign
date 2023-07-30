import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { priceId, success_url, userRefId } = await request.json();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PROD as string, {
    apiVersion: "2022-11-15",
  });

  if (!stripe) return;

  const total = priceId === "price_1NRYkoHvKmtkdhL0Q2t9xHDz" ? 4188 : 499;
  const name =
    priceId === "price_1NRYkoHvKmtkdhL0Q2t9xHDz"
      ? "Premium Annually"
      : "Premium Monthly";
  const intervals =
    priceId === "price_1NRYkoHvKmtkdhL0Q2t9xHDz" ? "year" : "month";

  const qparams: Stripe.Checkout.SessionCreateParams = {
    mode: "subscription",
    line_items: [
      {
        price_data: {
          recurring: {
            interval: "month",
          },
          currency: "eur",
          product_data: {
            name: "Premium Monthly",
          },
          unit_amount: 100,
        },
        quantity: 1,
      },
    ],
    success_url: "https://easydesign.dev",
    cancel_url: `https://easydesign.dev`,
    client_reference_id: userRefId,
  };
  // const qparams: Stripe.Checkout.SessionCreateParams = {
  //   mode: "payment",
  //   line_items: [
  //     {
  //       price: "price_1NYmEVHvKmtkdhL0CFZMPGtk",
  //       quantity: 1,
  //     },
  //   ],
  //   // success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  //   success_url: "https://easydesign.dev",
  //   cancel_url: `https://easydesign.dev`,
  //   client_reference_id: userRefId,
  // };
  try {
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(qparams, {
        apiKey: process.env.STRIPE_SECRET_KEY_PROD as string,
      });
    return NextResponse.json({ id: checkoutSession.id });
  } catch (err) {
    console.log("ERROR:", err);
    return NextResponse.error();
  }
}
