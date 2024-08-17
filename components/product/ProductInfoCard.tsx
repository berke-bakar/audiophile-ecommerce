import { cn, escapedNewLineToLineBreakTag } from "@/utils/util";
import React from "react";

type Props = {
  features?: string;
  className?: string;
};

export default function ProductInfoCard({ features, className }: Props) {
  return (
    <div className={cn("flex gap-[125px]", className)}>
      <div className="flex flex-col gap-[32px] max-w-[635px]">
        <h3>Features</h3>
        <p>{escapedNewLineToLineBreakTag(features)}</p>
      </div>
      <div className="flex flex-col gap-[32px]">
        <h3>In the Box</h3>
        <div className="flex flex-col gap-[8px]">
          <p>
            <span className="me-[24px] text-primary-dark text-bold">1x</span>
            <span className="opacity-50">Headphone Unit</span>
          </p>
          <p>
            <span className="me-[24px] text-primary-dark text-bold">2x</span>
            <span className="opacity-50">Replacement Earcups</span>
          </p>
          <p>
            <span className="me-[24px] text-primary-dark text-bold">1x</span>
            <span className="opacity-50">User Manual</span>
          </p>
          <p>
            <span className="me-[24px] text-primary-dark text-bold">1x</span>
            <span className="opacity-50">3.5mm 5m Audio Cable</span>
          </p>
          <p>
            <span className="me-[24px] text-primary-dark text-bold">1x</span>
            <span className="opacity-50">Travel Bag</span>
          </p>
        </div>
      </div>
    </div>
  );
}
