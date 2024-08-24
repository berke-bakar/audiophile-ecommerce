import { type SchemaTypeDefinition } from "sanity";
import { siteSettingsType } from "./siteSettings";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { promotedProductsType } from "./promotedProducts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettingsType, promotedProductsType, categoryType, productType],
};
