export type ProductType = {
  _id: string;
  categoryName: string;
  description: string;
  name: string;
  price: number;
  catalogImage?: string;
  images?: {
    alt: string;
    imageUrl: string;
  }[];
  slug: string;
  featuresDesc?: string;
  isNew?: boolean;
};

export type CategoryType = {
  _id: string;
  name: string;
};
