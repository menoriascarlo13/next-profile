import clsx from 'clsx';
import Image from 'next/image';

import { CardPropsType } from '@/types/CardType';

import styles from './Card.module.css';

const Card = ({
  image,
  name,
  price: { currentPrice, discountPercent, priceBeforeDiscount, showAsOnSale }
}: CardPropsType) => (
  <div className={styles.Card}>
    <figure>
      {image ? (
        <Image alt={name} height={500} src={image['0']} width={500} />
      ) : (
        <Image alt={name} height={500} src='/400.svg' width={500} />
      )}
    </figure>

    <div className={styles.Info}>
      <p className={styles.Name}>{name}</p>
      <p className={styles.Price}>
        {currentPrice && (
          <span
            className={clsx(styles.Original, {
              [styles.Sale]: showAsOnSale
            })}
          >
            {currentPrice}
          </span>
        )}
        {priceBeforeDiscount && showAsOnSale && (
          <span className={`${showAsOnSale && 'line-through'}`}>{priceBeforeDiscount}</span>
        )}
      </p>
    </div>

    {discountPercent && discountPercent > 0 && <p className={styles.DiscountPercentage}>{`${discountPercent}%`}</p>}
  </div>
);

export default Card;
