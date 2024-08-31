import { defineField, defineType } from "sanity";

export const promotedProductsType = defineType({
  name: "promotedProducts",
  title: "Promoted Products",
  type: "document",
  fields: [
    defineField({
      title: "Main Page Hero Configuration",
      name: "heroItems",
      type: "image",
      fields: [
        defineField({
          title: "Alt Text",
          name: "heroAlt",
          type: "string",
        }),
        defineField({
          title: "Which product would you like to show?",
          type: "reference",
          name: "heroProduct",
          to: [{ type: "product" }],
        }),
        defineField({
          title: "Text to show in hero section",
          name: "heroText",
          type: "text",
        }),
      ],
    }),
    defineField({
      title: "Main Page Promoted Product Banners",
      name: "promotedItems",
      type: "array",
      of: [
        {
          name: "Promoted Product Image",
          type: "image",
          fields: [
            defineField({
              name: "tabletImage",
              title:
                "Provide tablet image if it should display different image on tablets",
              type: "image",
            }),
            defineField({
              name: "mobileImage",
              title:
                "Provide tablet image if it should display different image on tablets",
              type: "image",
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: "Which product are you promoting?",
              type: "reference",
              name: "promotedProduct",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Optional description of promoted item",
              type: "text",
            }),
            defineField({
              title:
                "Which color text would be better on the background image?",
              name: "textStyle",
              type: "string",
              initialValue: "white",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Black", value: "black" },
                ],
                layout: "radio",
                direction: "horizontal",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: "Which side the text should be aligned?",
              name: "textAlignment",
              type: "string",
              initialValue: "right",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                ],
                layout: "radio",
                direction: "horizontal",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title:
                "Would you like to show image and text in separate panels?",
              name: "panelSeparated",
              type: "boolean",
              initialValue: false,
              options: {
                layout: "switch",
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(10).required(),
    }),
  ],
});
