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
    <div className={cn("flex gap-[125px]", className)}>
      <div className="flex flex-col gap-[32px] max-w-[635px]">
        <h3>Features</h3>
        <p>{escapedNewLineToLineBreakTag(features)}</p>
      </div>
      <div className="flex flex-col gap-[32px]">
        <h3>In the Box</h3>
        <div className="flex flex-col gap-[8px]">
          {boxContents?.map((val) => {
            return (
              <p>
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
