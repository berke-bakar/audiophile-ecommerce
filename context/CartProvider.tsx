"use client";

import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

type Props = React.PropsWithChildren;

export default function CartProvider({ children }: Props) {
  return (
    <USCProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string}
      currency={"USD"}
      shouldPersist={true}
    >
      {children}
    </USCProvider>
  );
}
