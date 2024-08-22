"use client";
import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/assets/icon-hamburger.svg";
import { Icon } from "./Icon";
import { useState } from "react";
import { createPortal } from "react-dom";
import CartModal from "./cart/CartModal";

type NavbarProps = {
  logo: string;
  icon: Icon;
  className?: string;
  options?: string[];
  optionsPrefix?: string;
  checkoutLink?: string;
};

export default function Navbar({
  logo,
  icon,
  className,
  options = [],
  optionsPrefix = "",
  checkoutLink = "/checkout",
}: NavbarProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav
      className={cn(
        "flex flex-row w-full justify-between items-center px-[40px] xl:px-0 h-[90px] xl:h-[96px] xl:max-w-[1110px] xl:mx-auto border-b border-white",
        "xl:absolute xl:top-0 xl:left-0 xl:right-0",
        className
      )}
    >
      <div className="flex md:gap-[42px] justify-between items-center grow md:grow-0 ">
        <Image
          src={hamburger.src}
          alt="hamburger menu icon"
          height={hamburger.height}
          width={hamburger.width}
          className="xl:hidden"
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
        <Image
          src={icon.src}
          alt="interactable icon"
          height={icon.height}
          width={icon.width}
          className="hover:cursor-pointer"
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal &&
        createPortal(
          <CartModal setShowModal={setShowModal} checkoutLink="/checkout" />,
          document.body
        )}
    </nav>
  );
}
