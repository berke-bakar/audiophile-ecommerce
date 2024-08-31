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
  heroItems: {
    imageUrl: string;
    altText: string;
    heroText: string;
    heroProduct: {
      _id: string;
      name: string;
      slug: string;
      categoryName: string;
    };
  };
  promotedItems: {
    desktopImageUrl: string;
    desktopImageDim: DimensionType;
    tabletImageUrl: string;
    tabletImageDim: DimensionType;
    mobileImageUrl: string;
    mobileImageDim: DimensionType;
    altText: string;
    textStyle: "black" | "white";
    panelSeparated: boolean;
    textAlignment: "left" | "right";
    description: string;
    promotedProduct: {
      _id: string;
      name: string;
      slug: string;
      categoryName: string;
    };
  }[];
};

export type DimensionType = {
  width: number;
  height: number;
  aspectRatio: number;
};
