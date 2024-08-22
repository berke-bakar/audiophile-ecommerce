"use client";

import { useState, useTransition } from "react";
import { useShoppingCart } from "use-shopping-cart";

type CartProductType = {
  name: string;
  description: string;
  id: string;
  price: number;
  currency: string;
  image?: string;
};

type Props = {
  product: CartProductType;
};

enum Action {
  Increment,
  Decrement,
}

export default function AddToCart({ product }: Props) {
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useShoppingCart();

  const handleQuantity = (action: Action) => {
    switch (action) {
      case Action.Increment:
        if (quantity >= 10) return;
        setQuantity(quantity + 1);
        break;
      case Action.Decrement:
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
        break;
    }
  };
  return (
    <div className="flex flex-row gap-[16px]">
      <div className="w-[120px] h-[48px] flex flex-row justify-center bg-slate-medium">
        <button
          data-action="decrement"
          className={" h-full w-20 cursor-pointer outline-none py-3"}
          onClick={() => handleQuantity(Action.Decrement)}
          aria-label={`Add one ${product.name} to your cart`}
        >
          <span className="m-auto text-base">-</span>
        </button>
        <input
          type="number"
          className="text-center w-full text-base hover md:text-basecursor-default flex items-center outline-none bg-transparent"
          name="custom-input-number"
          readOnly
          value={quantity}
        ></input>
        <button
          data-action="increment"
          className="h-full w-20 cursor-pointer py-3"
          onClick={() => handleQuantity(Action.Increment)}
          aria-label={`Add one ${product.name} to your cart`}
        >
          <span className="m-auto text-base">+</span>
        </button>
      </div>
      <button
        disabled={isPending}
        className="btn-1"
        onClick={() => addItem(product, { count: quantity })}
      >
        <span>ADD TO CART</span>
      </button>
    </div>
  );
}
