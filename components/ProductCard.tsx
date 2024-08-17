import { cn } from "@/utils/util";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  isNew?: boolean;
  name: string;
  categoryName: string;
  description: string;
  slug: string;
  slugPrefix: string;
  imageUrl?: string;
  alignImage: "left" | "right";
  className?: string;
};

export default function ProductCard({
  isNew = false,
  name,
  categoryName,
  description,
  slug,
  slugPrefix,
  imageUrl,
  alignImage,
  className,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-row gap-[125px]",
        {
          "flex-row-reverse": alignImage == "right",
        },
        className
      )}
    >
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
        <Link href={`/${slugPrefix}/${slug}`}>
          <button className="btn-1 uppercase">See Product</button>
        </Link>
      </div>
    </div>
  );
}
