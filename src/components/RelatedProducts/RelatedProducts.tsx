import Link from 'next/link';

import { PRODUCT_PAGE_SLUG } from '@/configs/const';
import { CentraProductType } from '@/types/CentraProductType';

import Grid from '../Grid/Grid';
import Headline from '../Headline/Headline';
import ProductCard from '../ProductCard/ProductCard';

type RelatedProductsPropType = {
  relatedProducts: CentraProductType[] & {
    priceBefore: boolean;
  };
};

const RelatedProducts = ({ relatedProducts }: RelatedProductsPropType) => {
  return (
    <section>
      <Headline>
        <h2>Related Products</h2>
      </Headline>
      <Grid>
        {relatedProducts.map(
          ({ discountPercent, media: { standard }, name, price, priceBeforeDiscount, showAsOnSale, uri }, index) => (
            <Link
              key={uri}
              href={{
                pathname: `/${PRODUCT_PAGE_SLUG}/[id]`,
                query: {
                  id: uri
                }
              }}
              locale='true'
            >
              <ProductCard
                image={standard}
                name={name}
                price={{
                  currentPrice: price,
                  discountPercent,
                  priceBeforeDiscount,
                  showAsOnSale
                }}
                product={relatedProducts[index]}
              />
            </Link>
          )
        )}
      </Grid>
    </section>
  );
};

export default RelatedProducts;
