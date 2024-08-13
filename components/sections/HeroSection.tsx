type HeroSectionProps = {
  infoText: string;
  titleText: string;
  subtitleText: string;
  buttonText: string;
  bgImg: string;
};

export default function HeroSection({
  infoText,
  titleText,
  subtitleText,
  buttonText,
  bgImg,
}: HeroSectionProps) {
  return (
    <section>
      <p className="text-overline">{infoText}</p>
      <h1>{titleText}</h1>
    </section>
  );
}
