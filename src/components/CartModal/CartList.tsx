import { CentraItemType } from '@/types/CentraProductType';

import CartItem from './CartItem/CartItem';

type CartListPropType = {
  items: CentraItemType[];
};

const CartList = ({ items }: CartListPropType) => (
  <>
    {items.map(({ item, line, product, quantity, size, totalPrice }) => (
      <CartItem
        key={line}
        item={item}
        line={line}
        product={product}
        quantity={quantity}
        size={size}
        totalPrice={totalPrice}
      />
    ))}
  </>
);

export default CartList;
