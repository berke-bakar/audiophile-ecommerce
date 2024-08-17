import { groq } from "next-sanity";
import { sanityFetch } from "./client";
import { CategoryType } from "./types";

export async function getCategories(): Promise<CategoryType[]> {
  return sanityFetch({
    query: groq`*[_type == "category"] {
      _id,
      name,
      "categoryImage": image.asset->url,
    }`,
  });
}
