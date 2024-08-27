import { cn } from "@/utils/util";
import Image, { StaticImageData } from "next/image";
import React from "react";

type AboutUsProps = {
  className?: string;
  // image: StaticImageData;
  imageUrl: string;
} & React.PropsWithChildren;

export default function AboutUs({
  imageUrl,
  className,
  children,
}: AboutUsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
      <div className="relative" style={{ height: 588, width: 540 }}>
        <Image
          src={imageUrl}
          alt="Generic image about company product"
          fill
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
