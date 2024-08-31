"use client";
import { DimensionType } from "@/sanity/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type ResponsiveImageProps = {
  desktopImageUrl: string;
  desktopImageDim: DimensionType;
  tabletImageUrl?: string;
  tabletImageDim?: DimensionType;
  mobileImageUrl?: string;
  mobileImageDim?: DimensionType;
  alt: string;
  className?: string;
};

interface ContainerSize {
  desktop: number;
  tablet: number;
  mobile: number;
}
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

export default function ResponsiveImage({
  desktopImageUrl,
  desktopImageDim,
  tabletImageUrl,
  tabletImageDim,
  mobileImageUrl,
  mobileImageDim,
  alt,
  className,
}: ResponsiveImageProps) {
  const getImageInfo = () => {
    // Check viewport size
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      let calculatedHeight = width;

      if (width < mediaBreakpoints["tablet"]) {
        return {
          url: mobileImageUrl || desktopImageUrl,
          calculatedHeight:
            containerWidths["mobile"] /
            (mobileImageDim?.aspectRatio ?? desktopImageDim.aspectRatio),
        };
      } else if (width < mediaBreakpoints["desktop"]) {
        return {
          url: tabletImageUrl || desktopImageUrl,
          calculatedHeight:
            containerWidths["tablet"] /
            (tabletImageDim?.aspectRatio ?? desktopImageDim.aspectRatio),
        };
      } else {
        return {
          url: desktopImageUrl,
          calculatedHeight:
            containerWidths["desktop"] / desktopImageDim.aspectRatio,
        };
      }
    }

    // Default to desktop image while rendering on server-side
    return {
      url: desktopImageUrl,
      calculatedHeight:
        containerWidths["desktop"] / desktopImageDim.aspectRatio,
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

  return (
    <>
      {imageInfo && (
        <Image
          src={imageInfo.url}
          alt={alt}
          layout="responsive"
          width={containerWidths[viewport]}
          height={imageInfo.calculatedHeight}
          className={className}
        />
      )}
    </>
  );
}
