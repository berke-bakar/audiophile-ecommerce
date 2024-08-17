import HeroSection from "@/components/sections/HeroSection";
import speaker1ProductBg from "@/public/assets/image-product1.png";
import speaker2ProductBg from "@/public/assets/image-product2.jpg";
import eaphoneProductBg from "@/public/assets/image-product3.jpg";
import CategoryList from "@/components/CategoryList";
import PromotedItem from "@/components/PromotedItem";

import { getCategories } from "@/sanity/lib/category-query";

export default async function Home() {
  const queryResults = await getCategories();
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
        {queryResults.map((val, ind) => {
          return (
            <CategoryList.Item
              categoryImg={val.categoryImage}
              name={val.name}
              key={ind}
            />
          );
        })}
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
    </>
  );
}
