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
      <div className="w-full h-[335px] bg-black text-white flex items-end justify-center pb-[95px] mb-[160px]">
        <h2>{params.name}</h2>
      </div>
      <div className="flex flex-col xl:max-w-[1110px] mx-auto gap-[160px] mb-[240px]">
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
