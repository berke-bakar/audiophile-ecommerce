import HeroSection from "@/components/sections/HeroSection";
import headphonesCategoryImg from "@/public/assets/category-headphones.png";
import speakersCategoryImg from "@/public/assets/category-speakers.png";
import earphonesCategoryImg from "@/public/assets/category-earphones.png";
import speaker1ProductBg from "@/public/assets/image-product1.png";
import speaker2ProductBg from "@/public/assets/image-product2.jpg";
import eaphoneProductBg from "@/public/assets/image-product3.jpg";
import aboutUsImg from "@/public/assets/about-us.jpg";
import CategoryList from "@/components/CategoryList";
import PromotedItem from "@/components/PromotedItem";
import AboutUs from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <div className="bg-[#191919] xl:mb-[120px]">
        <HeroSection
          infoText={"New Product"}
          titleText={"XX99 Mark II Headphones"}
          subtitleText={
            "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          }
          buttonText={"See Product"}
          className="bg-hero md:bg-hero-md xl:bg-hero-lg"
        />
      </div>
      <CategoryList className="xl:mb-[168px]">
        <CategoryList.Item
          categoryImg={headphonesCategoryImg}
          name={"Headphones"}
        />
        <CategoryList.Item
          categoryImg={speakersCategoryImg}
          name={"Speakers"}
        />
        <CategoryList.Item
          categoryImg={earphonesCategoryImg}
          name={"Earphones"}
        />
      </CategoryList>
      <div className="flex flex-col gap-[48px] xl:mb-[200px]">
        <PromotedItem
          productName={<h1>ZX9 Speaker</h1>}
          productDescription={
            "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          }
          align={"right"}
          bgImage={speaker1ProductBg}
          buttonClass={"btn-1 bg-black"}
          className={"text-white"}
        />
        <PromotedItem
          productName={"ZX7 Speaker"}
          // productDescription={""}
          align={"left"}
          bgImage={speaker2ProductBg}
          buttonClass={"btn-2"}
        />
        <PromotedItem
          productName={"YX1 Earphones"}
          align={"right"}
          bgImage={eaphoneProductBg}
          buttonClass={"btn-2"}
          separated
        />
      </div>
      <AboutUs
        image={aboutUsImg}
        className="xl:max-w-[1110px] mx-auto xl:mb-[200px]"
      >
        <div className="max-w-[41.5%] flex flex-col gap-[32px]">
          <h2>
            Bringing you the <span className="text-primary-dark">best</span>{" "}
            audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </AboutUs>
    </>
  );
}
