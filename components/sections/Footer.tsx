import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLink,
} from "react-icons/fa";

type FooterProps = {
  logo: string;
  options: string[];
  optionsPrefix: string;
  socialLinks: Record<string, string>;
} & React.PropsWithChildren;

export default function Footer({
  logo,
  options,
  children,
  socialLinks,
  optionsPrefix,
}: FooterProps) {
  return (
    <footer className="bg-black text-white xl:pt-[75px] pt-[60px] pb-[48px]">
      <div className="xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] mx-auto flex flex-col gap-[36px]">
        <div className="flex md:justify-between flex-col gap-[45px] md:gap-[30px] xl:flex-row items-center">
          <img src={logo} alt="Site logo" className="md:self-start" />
          <ul className="w-full flex flex-col md:flex-row items-center md:items-start xl:items-end md:justify-start xl:justify-end md:gap-[34px] gap-[16px]">
            {options.map((val, ind) => {
              const link =
                val.toLowerCase() === "home"
                  ? "/"
                  : `/${optionsPrefix}/${val.toLowerCase()}`;
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
        </div>
        <p className="xl:w-1/2 opacity-50">{children}</p>
        <div className="flex justify-between flex-col md:flex-row gap-[45px]">
          <p className="opacity-50">Copyright 2024. All Rights Reserved</p>
          <div className="flex md:justify-end md:items-end gap-[16px] items-center justify-center">
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
        </div>
      </div>
    </footer>
  );
}
