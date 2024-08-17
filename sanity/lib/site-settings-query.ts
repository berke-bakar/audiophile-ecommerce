import { groq } from "next-sanity";
import { sanityFetch } from "./client";
import { SiteSettings } from "./types";

export async function getSiteSettings(): Promise<SiteSettings[]> {
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
