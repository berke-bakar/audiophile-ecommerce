import { cn } from "@/utils/util";
import Image, { StaticImageData } from "next/image";
import React from "react";

type CategoryListProps = {
  className?: string;
} & React.PropsWithChildren;

type CategoryItemProps = {
  categoryImg: string;
  name: string;
  className?: string;
};

export default function CategoryList({
  className,
  children,
}: CategoryListProps) {
  return (
    <div
      className={cn(
        "xl:flex xl:flex-row xl:flex-wrap xl:gap-[30px] xl:justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

function Item({ categoryImg, name, className }: CategoryItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-end xl:h-[204px] xl:w-[350px] rounded-lg bg-slate-medium p-7",
        className
      )}
    >
      <div className="relative">
        <img
          src={categoryImg}
          alt={`${name} category image`}
          className="absolute bottom-0 left-0 right-0 mx-auto scale-[0.6]"
        />
      </div>
      <div className="flex flex-col items-center">
        <h6>{name}</h6>
        <Button>Shop</Button>
      </div>
    </div>
  );
}

function Button({ children }: React.PropsWithChildren) {
  return (
    <button className="btn-3">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
      >
        <path
          d="M1.3219 1L6.3219 6L1.3219 11"
          stroke="#D87D4A"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}

CategoryList.Item = Item;
