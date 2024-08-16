import { groq } from "next-sanity";
import { sanityFetch } from "./client";

export async function getSiteSettings() {
  return sanityFetch({
    query: groq`*[_type == "siteSettings"] {
      _id,
      title,
      footerText,
      "logoImage": logo.asset->url,
      socialLink
    }`,
  });
}
