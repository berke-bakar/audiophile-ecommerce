"use client";
import { DimensionType } from "@/sanity/lib/types";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type PromotedItemProps = {
  productName: string | React.ReactElement;
  productDescription?: string;
  align?: "left" | "right" | "bottom";
  images: string[];
  dimensions: DimensionType[];
  buttonClass?: string;
  buttonLink: string;
  separated?: boolean;
  className?: string;
};
const containerWidths = {
  desktop: 1110,
  tablet: 689,
  mobile: 327,
};

const mediaBreakpoints = {
  desktop: 1280,
  tablet: 768,
  mobile: 375,
};

interface ContainerSize {
  desktop: number;
  tablet: number;
  mobile: number;
}

export default function PromotedItem({
  productName,
  productDescription,
  align = "left",
  images,
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
  const getImageInfo = () => {
    // Check viewport size
    if (typeof window !== "undefined") {
      const width = window.innerWidth;

      if (width < mediaBreakpoints["tablet"]) {
        return {
          url: images[2] || images[0],
          calculatedHeight:
            containerWidths["mobile"] /
            (dimensions[2]?.aspectRatio ?? dimensions[0].aspectRatio),
        };
      } else if (width < mediaBreakpoints["desktop"]) {
        return {
          url: images[1] || images[0],
          calculatedHeight:
            containerWidths["tablet"] /
            (dimensions[1]?.aspectRatio ?? dimensions[0].aspectRatio),
        };
      } else {
        return {
          url: images[0],
          calculatedHeight:
            containerWidths["desktop"] / dimensions[0].aspectRatio,
        };
      }
    }

    // Default to desktop image while rendering on server-side
    return {
      url: images[0],
      calculatedHeight: containerWidths["desktop"] / dimensions[0].aspectRatio,
    };
  };
  const [viewport, setViewport] = useState<keyof ContainerSize>("desktop");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < mediaBreakpoints["tablet"]) {
        setViewport("mobile");
      } else if (width < mediaBreakpoints["desktop"]) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialization on client side
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageInfo = getImageInfo();

  // if the given image is vertical
  if (imageInfo.calculatedHeight > containerWidths[viewport]) {
    align = "bottom";
  }

  return (
    <div
      className={cn(
        "xl:w-[1110px] md:w-[689px] w-[327px] rounded-lg mx-auto flex items-center relative h-full",
        {
          "justify-end": align === "right" && !separated,
          "flex-col md:flex-row xl:gap-[30px] md:gap-[10px] gap-[24px]":
            separated,
          "justify-center": align === "bottom",
        },
        className
      )}
      style={{
        height: !separated
          ? imageInfo.calculatedHeight
          : viewport === "mobile"
            ? imageInfo.calculatedHeight * 2
            : imageInfo.calculatedHeight / 2,
      }}
    >
      {!separated && (
        <Image
          src={imageInfo.url}
          alt={`Image of ${productName}`}
          layout="responsive"
          width={containerWidths[viewport]}
          height={imageInfo.calculatedHeight}
          className={"-z-10 rounded-lg absolute"}
        />
      )}

      {separated && (
        <div
          className="rounded-lg"
          style={{
            height:
              viewport !== "mobile"
                ? imageInfo.calculatedHeight / 2
                : imageInfo.calculatedHeight,
            width:
              viewport !== "mobile"
                ? containerWidths[viewport] / 2
                : containerWidths[viewport],
          }}
        >
          <div className="h-full w-full relative">
            <Image
              alt={`Image of ${productName}`}
              src={imageInfo.url}
              className="rounded-lg"
              fill
            />
          </div>
        </div>
      )}

      <div
        className={cn("flex flex-col gap-[32px]", {
          "xl:ps-[90px] md:ps-[60px] ps-[25px]": align === "left",
          "w-1/3 text-wrap": align === "right",
          "h-full justify-end items-center text-center pb-[55px] text-pretty md:text-wrap md:w-1/2":
            align === "bottom",
          "pb-[15px]": align === "bottom" && imageInfo.calculatedHeight < 55,
          "bg-slate-medium h-full justify-center rounded-lg grow xl:ps-[90px] md:ps-[60px] ps-[25px]":
            separated,
          "w-full h-1/2": separated && viewport === "mobile",
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
