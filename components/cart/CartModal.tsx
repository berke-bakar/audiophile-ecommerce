"use client";
import { cn } from "@/utils/util";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

type CartModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  checkoutLink: string;
};

type OverlayProps = {
  onClick: React.MouseEventHandler;
  className: string;
} & React.PropsWithChildren;

type ModalProps = {
  className?: string;
} & React.PropsWithChildren;

function Overlay({ children, onClick, className }: OverlayProps) {
  return (
    <div id="overlay" onClick={onClick} className={className}>
      {children}
    </div>
  );
}

function Modal({ className, children }: ModalProps) {
  return (
    <div className={cn("rounded-lg bg-white flex flex-col", className)}>
      {children}
    </div>
  );
}

export default function CartModal({
  setShowModal,
  checkoutLink,
}: CartModalProps) {
  const {clearCart, cartCount, cartDetails, totalPrice} = useShoppingCart();

  console.log(cartDetails);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
      className={"absolute z-10 w-full h-full bg-black bg-opacity-50 top-0"}
    >
      <div
        className="relative xl:w-[1110px] md:w-[689px] w-[327px] mx-auto h-full"
        onClick={(e) => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}
      >
        <Modal className="absolute z-20 xl:top-[130px] top-[114px] right-0 md:w-[377px] w-[327px] px-[28px] md:px-[33px] py-[32px] flex flex-col gap-[24px]">
          <div className="flex justify-between">
            <h6>Cart ({cartCount})</h6>
            <button className="underline text-slate-500" onClick={() => clearCart()}>
              Remove all
            </button>
          </div>
          {/* TODO: Fill with cart items */}
          {
          cartCount && cartCount > 0 ? 
            Object.values(cartDetails ?? {}).map((item) => (<CartItem key={item.id} imageUrl={item.image} name={item.name} formattedPrice={item.formattedValue} productId={item.id} quantity={item.quantity}/>)) :
            (<p>Your cart is empty</p>)
          }
          <div className="flex flex-row justify-between">
            <p className="text-slate-500">TOTAL</p>
            <p className="font-bold">{`${formatCurrencyString({currency: "USD", value: totalPrice?? 0})}`}</p>
          </div>
          <button className="btn-1 w-full">
            <Link href={`${checkoutLink}`}>Checkout</Link>
          </button>
        </Modal>
      </div>
    </Overlay>
  );
}
