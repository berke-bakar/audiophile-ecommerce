"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
type Props = {};

export default function CheckoutButton({}: Props) {
  const { cartCount = 0, cartDetails } = useShoppingCart();

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="btn-1 w-full"
      onClick={() => cartCount > 0 && redirectToCheckout()}
      disabled={cartCount === 0}
    >
      Checkout
    </button>
  );
}
