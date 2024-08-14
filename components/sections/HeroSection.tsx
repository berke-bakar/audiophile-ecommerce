import { cn } from "@/utils/util";

type HeroSectionProps = {
  infoText: string;
  titleText: string;
  subtitleText: string;
  buttonText: string;
  className: string;
};

export default function HeroSection({
  infoText,
  titleText,
  subtitleText,
  buttonText,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "xl:h-[729px] bg-contain bg-center bg-no-repeat",
        className
      )}
    >
      <div className="xl:max-w-[1110px] flex flex-col gap-[40px] xl:mx-auto xl:py-[225px]">
        <div className="flex flex-col gap-[24px] w-[45ch] text-white">
          <p className="text-overline text-white opacity-50">{infoText}</p>
          <h1>{titleText}</h1>
          <p className="opacity-75 w-[40ch]">{subtitleText}</p>
        </div>
        <button className="btn-1 uppercase">{buttonText}</button>
      </div>
    </section>
  );
}
