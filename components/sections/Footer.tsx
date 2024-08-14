import React from "react";
import { Icon } from "../Icon";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

type FooterProps = {
  logo: Icon;
  options: string[];
} & React.PropsWithChildren;

export default function Footer({ logo, options, children }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="xl:max-w-[1110px] mx-auto grid grid-rows-3 grid-cols-2 items-end gap-[36px]">
        <Image
          src={logo.src}
          alt="logo icon"
          height={logo.height}
          width={logo.width}
        />
        <ul className="flex gap-[34px] justify-end items-end">
          {options.map((val, ind) => {
            const link =
              val.toLowerCase() === "home" ? "/" : `/${val.toLowerCase()}`;
            return (
              <li
                className="uppercase hover:text-primary-dark text-subtitle font-bold"
                key={ind}
              >
                <Link href={link}>{val}</Link>
              </li>
            );
          })}
        </ul>
        <p>{children}</p>
        <div className="flex justify-end items-end gap-[16px]">
          <FaFacebookSquare color="white" size={24} />
          <FaTwitter color="white" size={24} />
          <FaInstagram color="white" size={24} />
        </div>
        <p className="self-start">Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}
