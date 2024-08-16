import { type SchemaTypeDefinition } from "sanity";
import { siteSettingsType } from "./siteSettings";
import { categoryType } from "./categoryType";
import { productType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettingsType, categoryType, productType],
};
