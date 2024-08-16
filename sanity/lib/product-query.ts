import { groq } from "next-sanity";
import { sanityFetch } from "./client";

export async function getProducts() {
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

export async function getSelectedProducts(selectedCategory: string) {
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

export async function getSelectedProduct(productSlug: string) {
  return sanityFetch({
    query: groq`*[_type == "product" && slug->current == $productSlug] {
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
    }`,
    params: { productSlug },
  });
}
