import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/config/stripe";

type CartItem = {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { cartDetails } = await req.json();
  const cartDetailsArray = Object.values(cartDetails) as CartItem[];

  const lineItems = cartDetailsArray.map((item) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${headersList.get("origin")}/confirmation`,
      cancel_url: `${headersList.get("origin")}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe session error", err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
