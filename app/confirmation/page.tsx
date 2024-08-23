"use client";
import { NotificationContext } from "@/context/NotificationProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";
import { LuPackageCheck } from "react-icons/lu";

type Props = {};
type CartItem = {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

export default function Page({}: Props) {
  const { clearCart, cartDetails } = useShoppingCart();
  const [lastCart, setLastCart] = useState<CartEntry[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { createNotification } = useContext(NotificationContext);

  useEffect(() => {
    // Reaching this page clears the cart as transaction is successful
    if (cartDetails && Object.keys(cartDetails).length > 0) {
      const total = Object.values(cartDetails).reduce((acc, val) => {
        acc += val.price * val.quantity;
        return acc;
      }, 0);
      setLastCart(Object.values(cartDetails));
      setTotalPrice(total);
      clearCart();
      createNotification(
        "success",
        true,
        <div className="flex gap-4 items-center">
          <LuPackageCheck size={24} />
          <p>Order Confirmed.</p>
        </div>
      );
    }
  }, [cartDetails]);

  return (
    <>
      <div className="w-full h-[335px] bg-black text-white flex items-end justify-center pb-[95px] mb-[160px]">
        <h2>Order Confirmed</h2>
      </div>
      <div className="flex flex-col xl:max-w-[1110px] mx-auto gap-[160px] mb-[240px]">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="rounded-full h-[64px] w-[64px] bg-primary-dark text-white text-center p-2">
            <h2>✓</h2>
          </div>
          <h1 className="text-center">Thank you for your order</h1>
          <p className="opacity-50">
            You will receive an email confirmation shortly.
          </p>
          <ul className="w-1/2">
            {lastCart.length > 0 &&
              lastCart.map((val, ind) => {
                return (
                  <li key={val.id}>
                    <div className="flex gap-[16px] items-center">
                      <div className="relative h-[50px] w-[50px]">
                        <Image
                          src={val.image!}
                          alt={`Image of ${val.name}`}
                          fill
                          className="rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col grow">
                        <span className="text-subtitle">{val.name}</span>
                        <span className="opacity-50">{`${val.formattedPrice}`}</span>
                      </div>
                      <p className="opacity-50">x{val.quantity}</p>
                    </div>
                    <hr className="my-[16px]" />
                  </li>
                );
              })}
          </ul>
          <p>
            <span className="uppercase text-subtitle">Grand Total:</span>{" "}
            {formatCurrencyString({ value: totalPrice, currency: "USD" })}
          </p>
          <button className="btn-1">
            <Link href={"/"}>BACK TO HOME</Link>
          </button>
        </div>
      </div>
    </>
  );
}
