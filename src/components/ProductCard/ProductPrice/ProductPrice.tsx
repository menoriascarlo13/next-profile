type ProductPricePropsType = {
  price: string;
  priceBeforeDiscount: string;
  showAsOnSale: boolean;
};

const ProductPrice = ({ price, priceBeforeDiscount, showAsOnSale }: ProductPricePropsType) => (
  <p className='flex gap-2'>
    {price && <span className={`${showAsOnSale && 'sale'}`}>{price}</span>}
    {priceBeforeDiscount && showAsOnSale && (
      <span className={`${showAsOnSale && 'price-before'}`}>{priceBeforeDiscount}</span>
    )}
  </p>
);

export default ProductPrice;
