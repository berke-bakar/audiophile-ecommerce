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
      <div className="h-[90px] xl:h-[96px] w-full bg-black xl:mb-[160px] md:mb-[80px] mb-[65px]"></div>
      <main className="xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] mx-auto">
        <ProductPageCard
          product={productInfo}
          className={"xl:mb-[160px] md:mb-[120px] mb-[90px]"}
        />
        <ProductInfoCard
          features={productInfo.feature}
          className={"mb-[160px]"}
          boxContents={productInfo.inTheBox}
        />
        <ProductImageGallery
          topImageSrc={productInfo.productImages.imageUrl[0]}
          topImageAlt={productInfo.productImages.alt[0]}
          bottomImageSrc={productInfo.productImages.imageUrl[1]}
          bottomImageAlt={productInfo.productImages.alt[1]}
          sideImageSrc={productInfo.productImages.imageUrl[2]}
          sideImageAlt={productInfo.productImages.alt[2]}
          className={"xl:mb-[160px] mb-[120px]"}
        />
      </main>
    </>
  );
}
