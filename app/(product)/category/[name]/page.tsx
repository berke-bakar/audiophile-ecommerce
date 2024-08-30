import ProductCard from "@/components/product/ProductCard";
import { getSelectedProducts } from "@/sanity/lib/product-query";
import React from "react";

type Props = {
  params: { name: string };
};

export default async function Page({ params }: Props) {
  const catalogProducts = await getSelectedProducts(params.name.toLowerCase());

  return (
    <>
      <div
        className="w-full md:h-[335px] h-[192px] bg-black text-white box-border
      md:pb-[95px] xl:mb-[160px] md:mb-[120px] mb-[64px] pb-[32px] flex items-end justify-center"
      >
        <h2 className="text-[28px] md:text-[40px]">{params.name}</h2>
      </div>
      <div className="flex flex-col xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] mx-auto gap-[120px] xl:gap-[160px] xl:mb-[240px] mb-[120px]">
        {catalogProducts.map((val, ind) => {
          return (
            <ProductCard
              key={ind}
              isNew={val.isNew}
              name={val.name}
              categoryName={val.categoryName}
              description={val.description}
              slug={val.slug}
              slugPrefix={"product"}
              imageUrl={val.catalogImage}
              alignImage={ind % 2 == 0 ? "left" : "right"}
            />
          );
        })}
      </div>
    </>
  );
}
