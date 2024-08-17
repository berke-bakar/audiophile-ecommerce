import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfoCard from "@/components/product/ProductInfoCard";
import ProductPageCard from "@/components/product/ProductPageCard";
import { getSelectedProduct } from "@/sanity/lib/product-query";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const productInfo = await getSelectedProduct(slug);
  return (
    <>
      <div className="xl:h-[96px] w-full bg-black mb-[160px]"></div>
      <main className="max-w-[1110px] mx-auto">
        <ProductPageCard
          name={productInfo.name}
          categoryName={productInfo.categoryName}
          description={productInfo.description}
          price={productInfo.price}
          imageUrl={productInfo.catalogImage}
          isNew={productInfo.isNew}
          className={"mb-[160px]"}
        />
        <ProductInfoCard
          features={productInfo.feature}
          className={"mb-[160px]"}
        />
        <ProductImageGallery
          topImageSrc={productInfo.productImages.imageUrl[0]}
          topImageAlt={productInfo.productImages.alt[0]}
          bottomImageSrc={productInfo.productImages.imageUrl[1]}
          bottomImageAlt={productInfo.productImages.alt[1]}
          sideImageSrc={productInfo.productImages.imageUrl[2]}
          sideImageAlt={productInfo.productImages.alt[2]}
          className={"mb-[240px]"}
        />
      </main>
    </>
  );
}
