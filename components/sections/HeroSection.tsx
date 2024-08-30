import { cn } from "@/utils/util";
import Link from "next/link";

type HeroSectionProps = {
  infoText: string;
  titleText: string;
  subtitleText: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  backgroundImage?: string;
};

export default function HeroSection({
  infoText,
  titleText,
  subtitleText,
  buttonText,
  buttonLink,
  className,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className={cn("md:h-[729px] h-[600px]", className)}>
      <div
        className="xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] flex flex-col gap-[40px] mx-auto xl:pt-[225px] md:pt-[215px] pt-[198px] items-center xl:items-start
        bg-contain bg-no-repeat xl:bg-right bg-center md:after:pt-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="flex flex-col gap-[24px] text-white text-center xl:text-left">
          <p className="text-overline text-white opacity-50">{infoText}</p>
          <h1 className="text-[36px] md:text-[56px] text-pretty max-w-[20ch]">
            {titleText}
          </h1>
          <p className="opacity-75 w-[40ch] md:max-w-[689px] max-w-[327px] mx-auto xl:mx-0">
            {subtitleText}
          </p>
        </div>
        <Link href={buttonLink}>
          <button className="btn-1 uppercase">{buttonText}</button>
        </Link>
      </div>
    </section>
  );
}
