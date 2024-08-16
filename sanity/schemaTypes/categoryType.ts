import { defineType, defineField } from "sanity";

export const categoryType = defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    defineField({
      title: "Category Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Category Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
