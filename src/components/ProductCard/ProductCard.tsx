/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import { Navigation, Pagination } from 'swiper';

import { CentraProductType } from '@/types/CentraProductType';

import Carousel from '../Carousel/Carousel';
import Images from '../Image/Image';
import styles from './ProductCard.module.css';
import ProductLabel from './ProductLabel/ProductLabel';
import ProductPrice from './ProductPrice/ProductPrice';

type ProductCardPropsType = {
  image: string[];
  name?: string;
  price: {
    currentPrice: string;
    discountPercent: number;
    priceBeforeDiscount: string;
    showAsOnSale: boolean;
  };
  product: CentraProductType;
};

const ProductCard = ({ image, product }: ProductCardPropsType) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { discountPercent, items, name, price, priceBeforeDiscount, relatedProducts, sh_swatch, showAsOnSale } =
    product;

  const renderHoverImage = () => (
    <figure className={clsx(styles.Image, styles.ImageHover)}>
      {image.map((content, index) => index <= 1 && <Images key={content} alt={name} src={image[index]} />)}
    </figure>
  );

  const renderImageSlider = () => (
    <div className={styles.Slider}>
      <Carousel modules={[Pagination, Navigation]} navigation pagination={{ clickable: false }}>
        {image.map((element, index) => (
          <figure key={element} className={styles.Image}>
            <Images alt={name} src={image[index]} />
          </figure>
        ))}
      </Carousel>
    </div>
  );

  return (
    <div className={styles.ProductCard}>
      {image ? (
        image.length <= 2 ? (
          renderHoverImage()
        ) : (
          renderImageSlider()
        )
      ) : (
        <figure className={styles.Image}>
          <Images alt={name} />
        </figure>
      )}

      <div className={styles.Info}>
        {name && <p className={styles.Name}>{name}</p>}

        <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} showAsOnSale={showAsOnSale} />

        {sh_swatch && (
          <div>
            <div
              className={styles.Color}
              style={{
                backgroundColor: sh_swatch.hex
              }}
            />
          </div>
        )}
      </div>

      <div className={styles.Label}>
        <ProductLabel discountPercent={discountPercent} items={items} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductCard;
