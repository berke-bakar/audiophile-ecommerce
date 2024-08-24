import type { StructureResolver } from "sanity/structure";
import { ControlsIcon, SparklesIcon } from "@sanity/icons";
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Document Type(s)")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(ControlsIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettingsSingleton")
        ),
      S.listItem()
        .title("Promoted Products")
        .icon(SparklesIcon)
        .child(
          S.document()
            .schemaType("promotedProducts")
            .documentId("promotedProductsSingleton")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "promotedProducts"].includes(listItem.getId()!)
      ),
    ]);
};
