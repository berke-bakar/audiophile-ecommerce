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
      inTheBox,
    }[0]`,
    params: { productSlug },
  });
}

export async function getPromotedProducts(): Promise<PromotedProducts> {
  return sanityFetch({
    query: groq`*[_type == "promotedProducts"]{
      "heroItems": {
        "imageUrl": heroItems.asset->url,
        "altText": heroItems.heroAlt,
        "heroText": heroItems.heroText,
        "heroProduct": heroItems.heroProduct->{
          _id,
          name,
          "slug": slug.current,
          "categoryName": category->name,
        }
      },
      "promotedItems": promotedItems[]{
        "desktopImageUrl": asset->url,
        "desktopImageDim": asset->metadata.dimensions,
        "tabletImageUrl": tabletImage.asset->url,
        "tabletImageDim": tabletImage.asset->metadata.dimensions,
        "mobileImageUrl": mobileImage.asset->url,
        "mobileImageDim": mobileImage.asset->metadata.dimensions,
        "altText": alt,
        "promotedProduct": promotedProduct->{
          _id,
          name,
          "categoryName": category->name,
          "slug": slug.current
        },
        "description": description,
        "textStyle": textStyle,
        "textAlignment": textAlignment,
        "panelSeparated": panelSeparated
      }
    }[0]`,
  });
}
