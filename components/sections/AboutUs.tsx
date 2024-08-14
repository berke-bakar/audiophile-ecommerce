import { cn } from "@/utils/util";
import Image, { StaticImageData } from "next/image";
import React from "react";

type AboutUsProps = {
  className?: string;
  image: StaticImageData;
} & React.PropsWithChildren;

export default function AboutUs({ image, className, children }: AboutUsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
      <div style={{ height: image.height, width: image.width }}>
        <Image
          src={image.src}
          height={image.height}
          width={image.width}
          alt="Generic image about company product"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
