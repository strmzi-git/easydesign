import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { priceId, success_url, userRefId } = await request.json();
  console.log(priceId, success_url);

  const origin = request.headers.get("origin");
  console.log("API KEY:", process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY_TEST);
  const stripe = new Stripe(
    "sk_test_51NRABnHvKmtkdhL0Mbn3QbJHYmVnVWujFYy6nNR97R5P437NAB17Xtla4mWDrwRiR2AWRL0XlQ23ODJUtFAAE70c00sGpdyEVS",
    {
      apiVersion: "2022-11-15",
    }
  );

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
        // price: priceId,
        price_data: {
          recurring: {
            interval: intervals,
          },
          currency: "eur",
          product_data: {
            name: name,
          },
          unit_amount: total,
        },
        quantity: 1,
      },
    ],
    // success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    success_url: "http://localhost:3000/",
    cancel_url: `http://localhost:3000/`,
    client_reference_id: userRefId,
  };
  try {
    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(qparams, {
        apiKey:
          "sk_test_51NRABnHvKmtkdhL0Mbn3QbJHYmVnVWujFYy6nNR97R5P437NAB17Xtla4mWDrwRiR2AWRL0XlQ23ODJUtFAAE70c00sGpdyEVS",
      });
    return NextResponse.json({ id: checkoutSession.id });
  } catch (err) {
    console.log("ERROR:", err);
    return NextResponse.error();
  }
}
