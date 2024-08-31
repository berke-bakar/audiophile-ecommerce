"use client";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/assets/icon-hamburger.svg";
import { Icon } from "./Icon";
import { useState } from "react";
import { createPortal } from "react-dom";
import CartModal from "./cart/CartModal";
import { CategoryType } from "@/sanity/lib/types";
import CategoryModal from "./CategoryModal";
import { useShoppingCart } from "use-shopping-cart";

type NavbarProps = {
  logo: string;
  icon: Icon;
  className?: string;
  optionsInfo: CategoryType[];
  optionsPrefix?: string;
};

export default function Navbar({
  logo,
  icon,
  className,
  optionsInfo = [],
  optionsPrefix = "",
}: NavbarProps) {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const { cartCount } = useShoppingCart();
  const options = ["Home", ...optionsInfo.map((val) => val.name)];

  return (
    <nav
      className={cn(
        "flex flex-row w-full justify-between items-center xl:px-0 h-[90px] xl:h-[96px] xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] mx-auto border-b border-white",
        "absolute top-0 left-0 right-0 z-20",
        className
      )}
    >
      <div className="flex md:gap-[42px] justify-between items-center grow md:grow-0 ">
        <Image
          src={hamburger.src}
          alt="hamburger menu icon"
          height={hamburger.height}
          width={hamburger.width}
          className="xl:hidden cursor-pointer"
          onClick={() => setShowCategoryModal((prev) => !prev)}
        />
        <Link href={"/"}>
          <img src={logo} alt="Site logo" />
        </Link>
      </div>
      <ul className="hidden xl:flex xl:flex-row text-white xl:items-center xl:gap-[34px]">
        {options?.map((val, ind) => {
          const link =
            val.toLowerCase() === "home"
              ? "/"
              : `/${optionsPrefix}/${val.toLowerCase()}`;
          return (
            <li
              key={ind}
              className="uppercase hover:text-primary-dark text-subtitle font-bold"
            >
              <Link href={link}>{val}</Link>
            </li>
          );
        })}
      </ul>
      <div className="grow flex justify-end md:grow-0">
        <div
          className="relative hover:cursor-pointer"
          style={{ height: icon.height }}
          onClick={() => setShowCartModal(true)}
        >
          <Image
            src={icon.src}
            alt="Cart icon"
            height={icon.height}
            width={icon.width}
          />
          {!!cartCount && (
            <div className="absolute bg-white font-bold rounded-full h-[22px] px-2 text-black left-[70%] top-0 -translate-y-1/2 flex justify-center items-center leading-none select-none">
              {cartCount}
            </div>
          )}
        </div>
      </div>
      {showCartModal &&
        createPortal(
          <CartModal setShowModal={setShowCartModal} />,
          document.body
        )}
      {showCategoryModal &&
        createPortal(
          <CategoryModal
            setShowModal={setShowCategoryModal}
            categoryInfo={optionsInfo}
          />,
          document.body
        )}
    </nav>
  );
}
