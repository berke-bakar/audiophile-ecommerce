export type ProductType = {
  _id: string;
  categoryName: string;
  description: string;
  name: string;
  price: number;
  catalogImage?: string;
  productImages?: {
    alt: string;
    imageUrl: string;
  }[];
  slug: string;
  feature?: string;
  isNew?: boolean;
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
  socialLink: Record<string, string>;
};
