import { ProductSizeNameType, StockType } from './common';

export type ProductMediaType = { [key: string]: string[] };

export type CentraProductSizeType = {
  ean: string;
  item: string;
  itemTableX: number;
  itemTableY: number;
  label?: string;
  name: ProductSizeNameType;
  sizeId: string;
  sku: string;
  stock: StockType;
};

export type CentraProductColorGroupType = {
  desc: string;
  hex: string;
  image?: {
    url: string;
  };
  uri: string;
};

export type CentraProductVideoUrlType = {
  image: {
    height: string;
    mimeType: string;
    type: string;
    url: string;
    width: string;
  };
  sort_order: string;
  textarea: string;
};

export type MeasurementType = {
  contents: {
    content: string;
    x: number;
    y: number;
  }[];
  unit: string;
  x: string[];
  y: string[];
};

export type CentraProductType = {
  additional_product_info_text?: string;
  available: boolean;
  back_in_stock_text?: string;
  brand: string;
  brandName: string;
  brandUri: string;
  categories: {
    category: string;
    name: string[];
    uri: string;
  }[];
  category: string;
  categoryName: string | string[];
  categoryUri: string;
  collectionName?: string;
  color_group?: CentraProductColorGroupType;
  coming_soon_text?: string;
  description: string;
  descriptionHtml: string;
  discountPercent: number;
  excerpt: string;
  excerptHtml: string;
  itemTable: {
    desc: string;
    dividerSymbol: string;
    original: {
      x: string[];
      y?: string[];
    };
    unit: string;
    x: string[];
    y: string[];
  };
  items: CentraProductSizeType[];
  measurementChart: MeasurementType;
  media: ProductMediaType;
  metaDescription: string;
  metaKeywords: string;
  metaTitle: string;
  name: string;
  price: string;
  priceAsNumber: number;
  priceBeforeDiscount: string;
  priceBeforeDiscountAsNumber: number;
  product: string;
  productSku: string;
  product_label?: string;
  product_tag?: string;
  product_video_url?: CentraProductVideoUrlType;
  relatedProducts?: CentraProductType[];
  relation: string;
  sh_swatch: CentraProductColorGroupType;
  showAsNew: boolean;
  showAsOnSale: boolean;
  sku: string;
  swatch: CentraProductColorGroupType;
  uri: string;
  variantName: string;
  variant_tag?: string;
};

export type CentraItemType = {
  item: string;
  line: string;
  product: CentraProductType;
  quantity: number;
  size: string;
  totalPrice: string;
};
