import { cn } from "@/utils/util";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
        "flex flex-col md:flex-row xl:flex-wrap xl:gap-[30px] gap-[10px] md:justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

function Item({ categoryImg, name, className }: CategoryItemProps) {
  return (
    <Link href={`/category/${name}`}>
      <div
        className={cn(
          "flex flex-col justify-end xl:h-[204px] xl:w-[350px] md:w-[223px] w-[327px] rounded-lg bg-slate-medium p-7",
          className
        )}
      >
        <div className="relative xl:min-h-[160px] min-h-[104px]">
          <Image
            src={categoryImg}
            alt={`${name} category image`}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <h6>{name}</h6>
          <Button>Shop</Button>
        </div>
      </div>
    </Link>
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
