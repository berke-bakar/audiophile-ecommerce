"use client";
import { NotificationContext } from "@/context/NotificationProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { FaTimesCircle } from "react-icons/fa";

type CartItemProps = {
  productId: string;
  imageUrl?: string;
  name: string;
  quantity: number;
  formattedPrice: string;
};

export default function CartItem({
  productId,
  imageUrl,
  name,
  quantity,
  formattedPrice,
}: CartItemProps) {
  const { incrementItem, decrementItem } = useShoppingCart();
  const { createNotification } = useContext(NotificationContext);

  function handleDecrease() {
    if (quantity - 1 == 0) {
      createNotification(
        "warning",
        true,
        <div className="flex gap-4 items-center">
          <FaTimesCircle size={24} />
          <p>
            <span className="font-bold">{name}</span> removed from cart.
          </p>
        </div>
      );
    }
    decrementItem(productId);
  }

  return (
    <div className="flex flex-row items-center gap-[16px]">
      <div className="relative h-[64px] w-[64px]">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${name} image`}
            fill
            className="rounded-xl"
          />
        )}
      </div>
      <div className="grow flex flex-col">
        <span className="text-subtitle">{name}</span>
        <span className="opacity-50">{`${formattedPrice}`}</span>
      </div>
      <div className="w-[96px] h-[32px] flex flex-row items-center bg-slate-medium">
        <button
          data-action="decrement"
          className={"basis-[32px] text-center h-full"}
          onClick={handleDecrease}
          aria-label={`Remove one ${name} from your cart`}
        >
          <span className="m-auto text-base">-</span>
        </button>
        <input
          type="number"
          className={
            "text-subtitle font-bold bg-slate-medium text-center h-full basis-[32px]"
          }
          min={1}
          max={10}
          readOnly
          value={quantity}
        ></input>
        <button
          data-action="increment"
          className={"grow text-center h-full basis-[32px]"}
          onClick={() => incrementItem(productId)}
          aria-label={`Add one more ${name} to your cart`}
        >
          <span className="m-auto text-base">+</span>
        </button>
      </div>
    </div>
  );
}
