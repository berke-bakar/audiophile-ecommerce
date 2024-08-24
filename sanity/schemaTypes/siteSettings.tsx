import { BlockDecoratorProps, defineField, defineType, Rule } from "sanity";
import React from "react";

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
        defineField({
          name: "youtube",
          title: "Youtube Link",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          title: "About Us Text",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              {
                title: "Colored",
                value: "colored",
                icon: () => "Colored",
                component: ({ children }: BlockDecoratorProps) => (
                  <span className="text-primary-dark">{children}</span>
                ),
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "aboutusimage",
      title: "About Us Image",
      type: "image",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "color",
    }),
  ],
});
