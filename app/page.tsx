import HeroSection from "@/components/sections/HeroSection";
import CategoryList from "@/components/CategoryList";
import PromotedItem from "@/components/PromotedItem";

import { getCategories } from "@/sanity/lib/category-query";
import { getSiteSettings } from "@/sanity/lib/site-settings-query";
import { getPromotedProducts } from "@/sanity/lib/product-query";
import { cn } from "@/utils/util";

export default async function Home() {
  const queryResults = await Promise.all([
    getSiteSettings(),
    getCategories(),
    getPromotedProducts(),
  ]);
  const siteSettings = queryResults[0];
  const categoryResults = queryResults[1];
  const promotedResults = queryResults[2];

  const bgColorObj = siteSettings[0].bgColor;
  const bgColor = `rgba(${bgColorObj.r}, ${bgColorObj.g}, ${bgColorObj.b}, ${bgColorObj.a ?? 1})`;

  return (
    <>
      <div
        className="xl:mb-[120px] md:mb-[90px] mb-[65px]"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <HeroSection
          infoText={"New Product"}
          titleText={`${promotedResults.heroItems.heroProduct.name} ${promotedResults.heroItems.heroProduct.categoryName}`}
          subtitleText={promotedResults.heroItems.heroText}
          buttonText={"See Product"}
          buttonLink={`/product/${promotedResults.heroItems.heroProduct.slug}`}
          backgroundImage={promotedResults.heroItems.imageUrl}
        />
      </div>
      <CategoryList className="xl:mb-[168px] md:mb-[96px] mb-[120px]">
        {categoryResults.map((val, ind) => {
          return (
            <CategoryList.Item
              categoryImg={val.categoryImage}
              name={val.name}
              key={ind}
            />
          );
        })}
      </CategoryList>
      <div className="flex flex-col xl:gap-[48px] md:gap-[32px] gap-[24px] xl:mb-[200px] md:mb-[96px] mb-[120px]">
        {promotedResults.promotedItems.map((val, ind) => {
          return (
            <PromotedItem
              key={val.promotedProduct._id}
              productName={
                ind === 0 ? (
                  <h1>{val.promotedProduct.name}</h1>
                ) : (
                  val.promotedProduct.name
                )
              }
              productDescription={val.description}
              align={val.textAlignment}
              images={[
                val.desktopImageUrl,
                val.tabletImageUrl,
                val.mobileImageUrl,
              ]}
              dimensions={[
                val.desktopImageDim,
                val.tabletImageDim,
                val.mobileImageDim,
              ]}
              buttonClass={cn({
                "btn-1 bg-black": val.textStyle === "white",
                "btn-2": val.textStyle === "black",
              })}
              buttonLink={`/product/${val.promotedProduct.slug}`}
              className={cn({
                "text-white": val.textStyle === "white",
              })}
              separated={val.panelSeparated}
            />
          );
        })}
      </div>
    </>
  );
}
