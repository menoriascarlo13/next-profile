import { CentraItemType } from '@/types/CentraProductType';

import Button from '../Button/Button';
import CartList from './CartList';
import styles from './CartModal.module.css';

type CartModalPropType = {
  className: string;
  continueShopping: () => void;
  items: CentraItemType[];
  totals: {
    grandTotalPrice: string;
    shippingPrice: string;
    taxPercent: string;
    totalQuantity: string;
  };
};

const CartModal = ({ className, continueShopping, items, totals }: CartModalPropType) => (
  <div className={`${styles.CartModal} ${className}`}>
    {items.length > 0 && (
      <div className={styles.Header}>
        <h5>Your Cart</h5>
        <button onClick={continueShopping} type='button'>
          Continue Shopping
        </button>
      </div>
    )}

    <div className={styles.Products}>
      {items.length > 0 ? <CartList items={items} /> : <div className={styles.NoItem}>No Items</div>}
    </div>
    {items.length > 0 && (
      <div className={styles.Information}>
        <p>
          <span className={styles.Title}>Shipping Price: </span>
          {totals.shippingPrice}
        </p>
        <p>
          <span className={styles.Title}>Total Products: </span>
          {totals.totalQuantity}
        </p>
        <p>
          <span className={styles.Title}>Tax: </span>
          {totals.taxPercent}
        </p>
        <p>
          <span className={styles.Title}>Grand Total: </span>
          {totals.grandTotalPrice}
        </p>

        <Button label='CHECKOUT' variant='checkout' />
      </div>
    )}
  </div>
);

export default CartModal;
