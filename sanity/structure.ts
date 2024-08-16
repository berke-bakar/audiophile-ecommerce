import type { StructureResolver } from "sanity/structure";
import { ControlsIcon } from "@sanity/icons";
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
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings"].includes(listItem.getId()!)
      ),
    ]);
};
