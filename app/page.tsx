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
          titleText={`${promotedResults.heroProductName} ${promotedResults.heroProductCategory}`}
          subtitleText={promotedResults.heroText}
          buttonText={"See Product"}
          buttonLink={`/product/${promotedResults.heroProductSlug}`}
          backgroundImage={promotedResults.heroImageUrl}
        />
      </div>
      <CategoryList className="xl:mb-[168px] mb-[96px]">
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
      {/* <div className="flex flex-col gap-[48px] xl:mb-[200px]">
        {promotedResults.promotedProductNames.map((val, ind) => {
          return (
            <PromotedItem
              key={val}
              productName={ind === 0 ? <h1>{val}</h1> : val}
              productDescription={promotedResults.promotedDescs[ind]}
              align={promotedResults.promotedTextAlignments[ind]}
              bgImage={promotedResults.promotedUrls[ind]}
              dimensions={promotedResults.promotedDimensions[ind]}
              buttonClass={cn({
                "btn-1 bg-black":
                  promotedResults.promotedTextStyles[ind] === "white",
                "btn-2": promotedResults.promotedTextStyles[ind] === "black",
              })}
              buttonLink={`/product/${promotedResults.promotedProductSlugs[ind]}`}
              className={cn({
                "text-white":
                  promotedResults.promotedTextStyles[ind] === "white",
              })}
              separated={promotedResults.promotedPanelSeparated[ind]}
            />
          );
        })}
      </div> */}
    </>
  );
}
