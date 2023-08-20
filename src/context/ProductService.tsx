/* eslint-disable consistent-return */
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

import CentraObjectFilter from '@/services/centraObjectFilter';
import CentraProductsObjectFilter from '@/services/centraProductsObjectFilter';
import { CartType } from '@/types/CartType';

export const ProductService = createContext<any>('');

type ProductServiceProviderPropsType = {
  children?: ReactNode;
  value: any;
};

type UpdateCartPropType = {
  action: string;
  line: string;
  quantity: number;
};

export const ProductServiceProvider = ({ children, value }: ProductServiceProviderPropsType) => {
  const { props } = value;

  const centra = useMemo(() => CentraProductsObjectFilter({ props }), [props]);
  const selection = useMemo(() => CentraObjectFilter({ props, subFilter: 'selection', toFilter: 'prop' }), [props]);
  const totalsMemo = useMemo(
    () => CentraObjectFilter({ props: selection, subFilter: 'totals', toFilter: 'selection' }),
    [selection]
  );
  const itemsMemo = useMemo(
    () => CentraObjectFilter({ props: selection, subFilter: 'items', toFilter: 'selection' }),
    [selection]
  );

  const [currentTotalQuantity, setCurrentTotalQuantity] = useState<number>(totalsMemo.totalQuantity || 0);
  const [currentTotals, setCurrentTotals] = useState(totalsMemo);
  const [currentItems, setCurrentItems] = useState(itemsMemo);
  const [loading, setLoading] = useState(false);
  const [currentLine, setCurrentLine] = useState<string>('');
  const [addToCart, setAddToCart] = useState(false);

  const cart = useCallback(async ({ item, quantity }: CartType) => {
    try {
      setAddToCart(true);
      await fetch('/api/centra/addToCart', {
        body: JSON.stringify({ item, quantity }),
        method: 'POST'
      })
        .then((response) => response.json())
        .then(({ items, totalQuantity, totals }) => {
          setAddToCart(false);
          setCurrentTotalQuantity(totalQuantity);
          setCurrentItems(items);
          setCurrentTotals(totals);
        });
    } catch (err) {
      return err;
    }
  }, []);

  const updateCart = useCallback(async ({ action, line, quantity }: UpdateCartPropType) => {
    setLoading(true);
    setCurrentLine(line);
    return fetch('/api/centra/updateCartItem', {
      body: JSON.stringify({ action, line, quantity }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => response.json())
      .then(({ items, status, totalQuantity, totals }) => {
        setLoading(false);
        setCurrentTotalQuantity(totalQuantity);
        setCurrentItems(items);
        setCurrentTotals(totals);

        return { items, status, totalQuantity, totals };
      });
  }, []);

  const updateCartValue = useMemo(() => updateCart, [updateCart]);

  const memoProductService = useMemo(
    () => (
      <ProductService.Provider
        value={{
          addToCart,
          cart,
          centra,
          currentItems,
          currentLine,
          currentTotalQuantity,
          currentTotals,
          loading,
          updateCart,
          updateCartValue
        }}
      >
        {children}
      </ProductService.Provider>
    ),
    [
      addToCart,
      cart,
      children,
      centra,
      currentTotalQuantity,
      currentItems,
      currentLine,
      currentTotals,
      loading,
      updateCart,
      updateCartValue
    ]
  );

  return memoProductService;
};
