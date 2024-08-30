import { defineField, defineType } from "sanity";

export const productType = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Product Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Catalog Image",
      name: "catalogImage",
      type: "image",
    }),
    defineField({
      title: "Product Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.length(3).required(),
    }),
    defineField({
      title: "Product Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Product Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Product Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      title: "Product Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      title: "Product Features Description",
      name: "feature",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Is product new?",
      name: "isNew",
      type: "boolean",
      options: {
        layout: "switch",
      },
      initialValue: false,
    }),
    defineField({
      title: "What is in the box?",
      name: "inTheBox",
      type: "array",
      of: [
        {
          name: "boxItem",
          type: "object",
          title: "Provide accessory name and quantity",
          fields: [
            {
              name: "accessoryName",
              title: "Accessory Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "accessoryQuantity",
              title: "Accessory Quantity",
              type: "number",
              validation: (Rule) => Rule.min(1).positive().required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
