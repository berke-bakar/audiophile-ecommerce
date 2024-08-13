import { cn } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/assets/icon-hamburger.svg";

type Icon = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};

type NavbarProps = {
  logo: Icon;
  icon: Icon;
  className?: string;
  options?: string[];
} & React.PropsWithChildren;

export default function Navbar({
  logo,
  icon,
  className,
  children,
  options,
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex flex-row w-full justify-between items-center px-[40px] lg:px-0 h-[90px] lg:h-[96px] lg:max-w-[1110px] lg:mx-auto border-b border-white",
        "lg:absolute lg:top-0 lg:left-0 lg:right-0",
        className
      )}
    >
      <div className="flex md:gap-[42px] justify-between items-center grow md:grow-0 ">
        <Image
          src={hamburger.src}
          alt="hamburger menu icon"
          height={hamburger.height}
          width={hamburger.width}
          className="lg:hidden"
        />
        <Link href={"/"}>
          <Image
            src={logo.src}
            alt="logo icon"
            height={logo.height}
            width={logo.width}
          />
        </Link>
      </div>
      <ul className="hidden lg:flex lg:flex-row text-white lg:items-center lg:gap-[34px]">
        {options?.map((val, ind) => {
          const link =
            val.toLowerCase() === "home" ? "/" : `/${val.toLowerCase()}`;
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
          className=""
        />
      </div>
    </nav>
  );
}
