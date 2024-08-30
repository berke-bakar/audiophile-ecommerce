import { cn } from "@/utils/util";
import { ok } from "assert";
import Image from "next/image";
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
        "w-full flex flex-col xl:gap-[125px] md:gap-[52px] gap-[32px] items-center xl:flex-row",
        {
          "xl:flex-row-reverse": alignImage == "right",
        },
        className
      )}
    >
      <div className="w-[352px] xl:w-[540px] h-[352px] xl:h-[540px] relative">
        <Image
          src={imageUrl!}
          objectFit="cover"
          fill
          alt={`${name} product image`}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-[32px] justify-center items-center xl:items-start">
        {isNew && (
          <p className="text-overline text-primary-dark">New Product</p>
        )}
        <div className="leading-none">
          <h2 className="text-center xl:text-start">{name}</h2>
          <h2>{categoryName}</h2>
        </div>
        <p className="max-w-[45ch] leading-7 xl:text-start text-center">
          {description}
        </p>
        <Link href={`/${slugPrefix}/${slug}`}>
          <button className="btn-1 uppercase">See Product</button>
        </Link>
      </div>
    </div>
  );
}
