import { cn } from "@/utils/util";
import Link from "next/link";
import React from "react";

type ProductPageCardType = {
  isNew?: boolean;
  name: string;
  categoryName: string;
  description: string;
  imageUrl?: string;
  price: number;
  className?: string;
};

export default function ProductPageCard({
  isNew = false,
  name,
  categoryName,
  description,
  imageUrl,
  price,
  className,
}: ProductPageCardType) {
  return (
    <div className={cn("w-full flex flex-row gap-[125px]", className)}>
      <div className="w-[540px] h-[560px] grow">
        <img
          src={imageUrl}
          alt={`${name} product image`}
          className="rounded-lg w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[32px] justify-center">
        {isNew && (
          <p className="text-overline text-primary-dark">New Product</p>
        )}
        <div className="leading-none">
          <h2>{name}</h2>
          <h2>{categoryName}</h2>
        </div>
        <p className="max-w-[45ch] leading-7">{description}</p>
        <h6>{`$ ${(price / 100).toFixed(2)}`}</h6>
      </div>
    </div>
  );
}
