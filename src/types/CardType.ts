export type CardPropsType = {
  image: string[];
  name: string;
  price: {
    currentPrice?: string;
    discountPercent?: number;
    priceBeforeDiscount?: string;
    showAsOnSale?: boolean;
  };
};
