import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "footerText",
      title: "Site Footer Text",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
    }),
    defineField({
      name: "socialLink",
      title: "Social Media Link(s)",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook Link",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "instagram Link",
          type: "url",
        }),
        defineField({
          name: "xtwitter",
          title: "X (Twitter) Link",
          type: "url",
        }),
      ],
    }),
  ],
});
