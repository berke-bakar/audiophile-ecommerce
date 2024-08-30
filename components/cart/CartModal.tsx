"use client";
import { cn } from "@/utils/util";
import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import CheckoutButton from "./CheckoutButton";
import { MdOutlineCleaningServices } from "react-icons/md";
import { NotificationContext } from "@/context/NotificationProvider";
import { Modal, Overlay } from "../Modal";

type CartModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setShowModal }: CartModalProps) {
  const { clearCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
  const { createNotification } = useContext(NotificationContext);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  function handleClearButton() {
    clearCart();
    createNotification(
      "info",
      true,
      <div className="flex gap-4 items-center">
        <MdOutlineCleaningServices />
        <p>Cart Cleaned.</p>
      </div>
    );
  }

  return (
    <Overlay
      id="cartOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
      className={"absolute z-30 w-full h-full bg-black bg-opacity-50 top-0"}
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
            <button
              className="underline text-slate-500 disabled:hidden"
              onClick={handleClearButton}
              disabled={cartCount ? !(cartCount > 0) : true}
            >
              Remove all
            </button>
          </div>
          {cartCount && cartCount > 0 ? (
            Object.values(cartDetails ?? {}).map((item) => (
              <CartItem
                key={item.id}
                imageUrl={item.image}
                name={item.name}
                formattedPrice={item.formattedValue}
                productId={item.id}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
          <div className="flex flex-row justify-between">
            <p className="text-slate-500">TOTAL</p>
            <p className="font-bold">{`${formatCurrencyString({ currency: "USD", value: totalPrice ?? 0 })}`}</p>
          </div>
          <CheckoutButton />
        </Modal>
      </div>
    </Overlay>
  );
}
