import { BoxContentItem } from "@/sanity/lib/types";
import { cn, escapedNewLineToLineBreakTag } from "@/utils/util";
import React from "react";

type Props = {
  features?: string;
  className?: string;
  boxContents?: BoxContentItem[];
};

export default function ProductInfoCard({
  features,
  className,
  boxContents,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row xl:gap-[125px] gap-[90px] md:gap-[120px]",
        className
      )}
    >
      <div className="flex flex-col md:gap-[32px] gap-[24px] max-w-[635px]">
        <h3>Features</h3>
        <p className="opacity-50">{escapedNewLineToLineBreakTag(features)}</p>
      </div>
      <div className="flex xl:flex-col md:flex-row flex-col xl:gap-[32px] gap-[24px] md:gap-0 xl:justify-normal md:justify-between">
        <h3>In the Box</h3>
        <div className="flex flex-col gap-[8px]">
          {boxContents?.map((val, ind) => {
            return (
              <p key={val._key}>
                <span className="me-[24px] text-primary-dark text-bold">
                  {val.accessoryQuantity}x
                </span>
                <span className="opacity-50">{val.accessoryName}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
