import { cn } from "@/utils/util";
import React from "react";
import AddToCart from "../cart/AddToCart";
import { ProductType } from "@/sanity/lib/types";
import Image from "next/image";

type ProductPageCardType = {
  product: ProductType;
  className?: string;
};

export default function ProductPageCard({
  product,
  className,
}: ProductPageCardType) {
  const cartProduct = {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    currency: "USD",
    image: product.catalogImage,
  };
  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row xl:gap-[125px] md:gap-[70px] gap-[32px] items-center",
        className
      )}
    >
      <div className="xl:w-[540px] xl:h-[560px] md:size-[320px] size-[327px] grow relative">
        <Image
          src={product.catalogImage!}
          alt={`${product.name} product image`}
          fill
          className="rounded-lg w-full h-full"
        />
      </div>
      <div className="flex flex-col md:gap-[32px] gap-[24px] justify-center">
        {product.isNew && (
          <p className="text-overline text-primary-dark">New Product</p>
        )}
        <div className="leading-none">
          <h2>{product.name}</h2>
          <h2>{product.categoryName}</h2>
        </div>
        <p className="max-w-[45ch] leading-7 opacity-50">
          {product.description}
        </p>
        <h6>{`$ ${(product.price / 100).toFixed(2)}`}</h6>
        <div>
          <AddToCart product={cartProduct} />
        </div>
      </div>
    </div>
  );
}
