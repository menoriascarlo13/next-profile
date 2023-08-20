export type CategoryType = SubCategoryType & {
  category: string;
  inCategory?: string;
  metaDescription?: string;
  metaKeywords?: string;
  name: string[];
  uri: string;
  uriNames: string[];
};

export type SubCategoryType = {
  subcategories?: CategoryType[];
};
