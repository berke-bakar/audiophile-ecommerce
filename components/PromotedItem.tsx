import { DimensionType } from "@/sanity/lib/types";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PromotedItemProps = {
  productName: string | React.ReactElement;
  productDescription?: string;
  align?: "left" | "right";
  bgImage: string;
  dimensions: DimensionType;
  buttonClass?: string;
  buttonLink: string;
  separated?: boolean;
  className?: string;
};

export default function PromotedItem({
  productName,
  productDescription,
  align = "left",
  bgImage,
  dimensions,
  buttonClass = "btn-1",
  buttonLink,
  separated = false,
  className,
}: PromotedItemProps) {
  const ProductNameEl =
    typeof productName === "string" ? (
      <h4 className="uppercase">{productName}</h4>
    ) : (
      productName
    );

  const height = !separated
    ? 1110 / dimensions.aspectRatio
    : Math.max(dimensions.width, 550 - 30) / dimensions.aspectRatio;
  const width = height * dimensions.aspectRatio;

  return (
    <div
      className={cn(
        "xl:w-[1110px] rounded-lg mx-auto flex items-center relative",
        {
          "justify-end": align === "right" && !separated,
          "gap-[30px]": separated,
          "px-[95px]": !separated,
        },
        className
      )}
      style={{
        height: height,
      }}
    >
      {!separated && (
        <Image alt="" src={bgImage} className="-z-10 rounded-lg" fill />
      )}

      {separated && (
        <div className="h-full rounded-lg">
          <div className="relative h-full" style={{ minWidth: width }}>
            <Image
              alt={`Image of ${productName}`}
              src={bgImage}
              className="-z-10 rounded-lg"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      )}

      <div
        className={cn("flex flex-col gap-[32px] basis-[350px]", {
          "bg-slate-medium px-[95px] h-full justify-center rounded-lg grow":
            separated,
        })}
      >
        {ProductNameEl}
        {productDescription && <p>{productDescription}</p>}
        <div>
          <Link href={buttonLink || "/"}>
            <button className={cn("uppercase", buttonClass)}>
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
