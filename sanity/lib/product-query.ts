import { groq } from "next-sanity";
import { sanityFetch } from "./client";
import { ProductType, PromotedProducts } from "./types";

export async function getProducts(): Promise<ProductType[]> {
  return sanityFetch({
    query: groq`*[_type == "product"] {
      _id,
      "categoryName": category->name,
      description,
      name,
      price,
      "catalogImage": catalogImage.asset->url,
      "slug": slug.current,
      isNew
    }`,
  });
}

export async function getSelectedProducts(
  selectedCategory: string
): Promise<ProductType[]> {
  return sanityFetch({
    query: groq`*[_type == "product" && category->name == $selectedCategory] {
      _id,
      "categoryName": category->name,
      description,
      name,
      price,
      "catalogImage": catalogImage.asset->url,
      "slug": slug.current,
      isNew
    }`,
    params: { selectedCategory },
  });
}

export async function getSelectedProduct(
  productSlug: string
): Promise<ProductType> {
  return sanityFetch({
    query: groq`*[_type == "product" && slug.current == $productSlug] {
      _id,
      "categoryName": category->name,
      description,
      name,
      price,
      "catalogImage": catalogImage.asset->url,
      "productImages": {"alt": images[].alt, "imageUrl": images[].asset->url},
      "slug": slug.current,
      feature,
      isNew,
    }[0]`,
    params: { productSlug },
  });
}

export async function getPromotedProducts(): Promise<PromotedProducts> {
  return sanityFetch({
    query: groq`*[_type == "promotedProducts"] {
        "heroProductName": heroItems.heroProduct->name,
        "heroProductCategory": heroItems.heroProduct->category->name,
        "heroProductSlug": heroItems.heroProduct->slug.current,
        "heroText": heroItems.heroText,
        "heroAlt": heroItems.heroAlt,
        "heroImageUrl": heroItems.asset->url,
        "heroImageDimensions": heroItems.asset->metadata.dimensions,
        "promotedUrls": promotedItems[].asset->url,
        "promotedDimensions": promotedItems[].asset->metadata.dimensions,
        "promotedDescs": promotedItems[].description,
        "promotedAlts": promotedItems[].alt,
        "promotedTextStyles": promotedItems[].textStyle,
        "promotedTextAlignments": promotedItems[].textAlignment,
        "promotedPanelSeparated": promotedItems[].panelSeparated,
        "promotedProductNames": promotedItems[].promotedProduct->name,
        "promotedProductSlugs": promotedItems[].promotedProduct->slug.current,
      }[0]`,
  });
}
