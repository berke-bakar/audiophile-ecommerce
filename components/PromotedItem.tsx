import { cn } from "@/utils/util";
import { StaticImageData } from "next/image";
import React from "react";

type PromotedItemProps = {
  productName: string | React.ReactElement;
  productDescription?: string;
  align?: "left" | "right";
  bgImage: StaticImageData;
  buttonClass?: string;
  separated?: boolean;
  className?: string;
};

export default function PromotedItem({
  productName,
  productDescription,
  align = "left",
  bgImage,
  buttonClass = "btn-1",
  separated = false,
  className,
}: PromotedItemProps) {
  const ProductNameEl =
    typeof productName === "string" ? (
      <h4 className="uppercase">{productName}</h4>
    ) : (
      productName
    );

  return (
    <div
      className={cn(
        "xl:w-[1110px] xl:h-[320px] rounded-lg mx-auto flex items-center",
        {
          "justify-end": align === "right" && !separated,
          "gap-[30px]": separated,
          "px-[95px]": !separated,
        },
        className
      )}
      style={{
        backgroundImage: !separated ? `url(${bgImage.src})` : "",
        height: bgImage.height,
      }}
    >
      {separated && (
        <div
          className="max-h-full rounded-lg"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            height: bgImage.height,
            width: bgImage.width,
          }}
        ></div>
      )}

      <div
        className={cn("flex flex-col gap-[32px] basis-[350px]", {
          "bg-slate-medium px-[95px] h-full justify-center rounded-lg grow":
            separated,
        })}
      >
        {ProductNameEl}
        {productDescription && <p>{productDescription}</p>}
        <button className={cn("uppercase", buttonClass)}>See Product</button>
      </div>
    </div>
  );
}
