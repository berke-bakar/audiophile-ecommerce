import React from "react";
import { Icon } from "../Icon";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLink,
} from "react-icons/fa";

type FooterProps = {
  // logo: Icon;
  logo: string;
  options: string[];
  socialLinks: Record<string, string>;
} & React.PropsWithChildren;

export default function Footer({
  logo,
  options,
  children,
  socialLinks,
}: FooterProps) {
  console.log(socialLinks);

  return (
    <footer className="bg-black text-white">
      <div className="xl:max-w-[1110px] mx-auto grid grid-rows-3 grid-cols-2 items-end gap-[36px]">
        <img src={logo} alt="Site logo" />
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
          {Object.entries(socialLinks).map(([key, val], ind) => {
            var icon = null;
            switch (key) {
              case "facebook":
                icon = <FaFacebookSquare color="white" size={24} />;
                break;
              case "xtwitter":
                icon = <FaTwitter color="white" size={24} />;
                break;
              case "instagram":
                icon = <FaInstagram color="white" size={24} />;
                break;
              case "youtube":
                icon = <FaYoutube color="white" size={24} />;
                break;
              default:
                icon = <FaLink color="white" size={24} />;
                break;
            }
            return (
              <Link href={val} key={key}>
                {icon}
              </Link>
            );
          })}
        </div>
        <p className="self-start">Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}
