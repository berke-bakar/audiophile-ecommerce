import { cn } from "@/utils/util";
import React from "react";

type ImageProps = {
  alt: string;
  imageUrl: string;
};

type Props = {
  topImageSrc: string;
  topImageAlt: string;
  bottomImageSrc: string;
  bottomImageAlt: string;
  sideImageSrc: string;
  sideImageAlt: string;
  className: string;
};

export default function ProductImageGallery({
  topImageSrc,
  topImageAlt,
  bottomImageSrc,
  bottomImageAlt,
  sideImageSrc,
  sideImageAlt,
  className,
}: Props) {
  return (
    <div className={cn("w-full flex gap-[30px]", className)}>
      <div className="flex flex-col gap-[32px]">
        <div>
          <img src={topImageSrc} alt={topImageAlt} className="rounded-lg" />
        </div>
        <div>
          <img
            src={bottomImageSrc}
            alt={bottomImageAlt}
            className="rounded-lg"
          />
        </div>
      </div>
      <div>
        <img src={sideImageSrc} alt={sideImageAlt} className="rounded-lg" />
      </div>
    </div>
  );
}
