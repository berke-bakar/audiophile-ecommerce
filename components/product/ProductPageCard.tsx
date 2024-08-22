import { cn } from "@/utils/util";
import React from "react";
import AddToCart from "../cart/AddToCart";
import { ProductType } from "@/sanity/lib/types";

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
    <div className={cn("w-full flex flex-row gap-[125px]", className)}>
      <div className="w-[540px] h-[560px] grow">
        <img
          src={product.catalogImage}
          alt={`${product.name} product image`}
          className="rounded-lg w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[32px] justify-center">
        {product.isNew && (
          <p className="text-overline text-primary-dark">New Product</p>
        )}
        <div className="leading-none">
          <h2>{product.name}</h2>
          <h2>{product.categoryName}</h2>
        </div>
        <p className="max-w-[45ch] leading-7">{product.description}</p>
        <h6>{`$ ${(product.price / 100).toFixed(2)}`}</h6>
        <div>
          <AddToCart product={cartProduct} />
        </div>
      </div>
    </div>
  );
}
