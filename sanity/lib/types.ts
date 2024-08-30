export type BoxContentItem = {
  accessoryName: string;
  accessoryQuantity: number;
  _key: string;
};
export type ProductType = {
  _id: string;
  categoryName: string;
  description: string;
  name: string;
  price: number;
  catalogImage?: string;
  productImages: {
    alt: string[];
    imageUrl: string[];
  };
  slug: string;
  feature?: string;
  isNew?: boolean;
  inTheBox?: BoxContentItem[];
};

export type CategoryType = {
  _id: string;
  name: string;
  categoryImage: string;
};

export type SiteSettings = {
  title: string;
  footerText: string;
  logoImage: string;
  aboutUsImage: string;
  socialLink: Record<string, string>;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote" | "colored";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  bgColor: {
    _type: "rgbaColor";
    r: number;
    g: number;
    b: number;
    a?: number;
  };
};

export type PromotedProducts = {
  heroProductName: string;
  heroProductCategory: string;
  heroProductSlug: string;
  heroText: string;
  heroAlt: string;
  heroImageUrl: string;
  heroImageDimensions: DimensionType;
  promotedUrls: string[];
  promotedDimensions: DimensionType[];
  promotedDescs: string[];
  promotedAlts: string[];
  promotedTextStyles: string[];
  promotedTextAlignments: Array<"left" | "right">;
  promotedPanelSeparated: boolean[];
  promotedProductNames: string[];
  promotedProductSlugs: string[];
};

export type DimensionType = {
  width: number;
  height: number;
  aspectRatio: number;
};
