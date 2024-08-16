import { groq } from "next-sanity";
import { sanityFetch } from "./client";

export async function getCategories() {
  return sanityFetch({
    query: groq`*[_type == "category"] {
      _id,
      name,
      "categoryImage": image.asset->url,
    }`,
  });
}
