import clsx from 'clsx';

import { CentraProductSizeType, CentraProductType } from '@/types/CentraProductType';

import styles from './ProductLabel.module.css';

type ProductLabelPropsType = {
  discountPercent: number;
  items?: CentraProductSizeType[];
  relatedProducts?: CentraProductType[];
};

const ProductLabel = ({ discountPercent, items = [], relatedProducts = [] }: ProductLabelPropsType) => (
  <>
    {discountPercent > 0 && <p className={clsx(styles.Label, 'discount')}>{`${discountPercent}% OFF`}</p>}

    {items?.length > 0 && <p className={styles.Label}>{`${items?.length} Sizes`}</p>}

    {relatedProducts && relatedProducts.length > 0 && (
      <p className={styles.Label}>{`${relatedProducts?.length} Related Product${
        relatedProducts.length >= 0 ? '' : 's'
      }`}</p>
    )}
  </>
);

export default ProductLabel;
