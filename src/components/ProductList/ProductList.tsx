import Link from 'next/link';
import { useContext } from 'react';

import { PRODUCT_PAGE_SLUG } from '@/configs/const';
import { ProductService } from '@/context/ProductService';
import { CentraProductType } from '@/types/CentraProductType';

import Grid from '../Grid/Grid';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const { centra } = useContext(ProductService);
  const productList = centra as CentraProductType[];

  return !productList ? (
    <Loader />
  ) : (
    <Grid className='px-4 md:px-0'>
      {productList.map(
        (
          { discountPercent, media: { standard }, name, price, priceBeforeDiscount, product, showAsOnSale, uri },
          index
        ) => (
          <Link key={product} href={`/${PRODUCT_PAGE_SLUG}/${uri}`}>
            <ProductCard
              image={standard}
              name={name}
              price={{
                currentPrice: price,
                discountPercent,
                priceBeforeDiscount,
                showAsOnSale
              }}
              product={productList[index]}
            />
          </Link>
        )
      )}
    </Grid>
  );
};

export default ProductList;
