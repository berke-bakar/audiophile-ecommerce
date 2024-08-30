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
    <div
      className={cn(
        "flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between md:gap-[65px] gap-[40px] xl:gap-0",
        className
      )}
    >
      <div className="relative xl:h-[588px] xl:w-[540px] w-full h-[300px]">
        <Image
          src={imageUrl}
          alt="Generic image about company product"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      {children}
    </div>
  );
}
