/* eslint-disable func-names */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useContext, useEffect, useState } from 'react';

import Image from '@/components/Image/Image';
import { PRODUCT_PAGE_SLUG } from '@/configs/const';
import { ProductService } from '@/context/ProductService';
import Loader from '@/icons/Loader';
import { CentraItemType } from '@/types/CentraProductType';

import styles from './CartItem.module.css';

const CartItem = ({ item, line, product, quantity, size, totalPrice }: CentraItemType) => {
  const { currentLine, loading, updateCart } = useContext(ProductService);
  const [settled, setSettled] = useState<boolean>(true);
  const [action, setAction] = useState<string>('');
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const router = useRouter();
  const isPathWasCurrent = router.asPath === `/${PRODUCT_PAGE_SLUG}/${product.uri}`;

  useEffect(() => {
    if (action === 'remove' && currentLine === line) {
      setIsRemoving(loading);
    }
  }, [line, currentLine, loading, action]);

  const decreaseQuantityHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAction('decrease');
    setSettled(false);
    updateCart({ action: 'decrease', line, quantity: 1 }).then((response: any) => {
      setSettled(response.status === 200);
    });
  };

  const increaseQuantityHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAction('increase');
    setSettled(false);
    await updateCart({ action: 'increase', line, method: 'POST', quantity: 1 }).then((response: any) => {
      setSettled(response.status === 200);
    });
  };

  const removeItemHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAction('remove');
    updateCart({ action: 'remove', line, method: 'DELETE', quantity: 1 });
  };

  return (
    <div key={item} className={styles.Card}>
      <Link
        href={
          isPathWasCurrent
            ? router.asPath
            : {
                pathname: `/${PRODUCT_PAGE_SLUG}/[id]`,
                query: {
                  id: product.uri
                }
              }
        }
      >
        <figure className={`${styles.Image} relative`}>
          <Image
            alt={product.name}
            height={150}
            src={Array.isArray(product.media.standard) ? product.media.standard[0] : ''}
            width={150}
          />
        </figure>
      </Link>
      <div className={styles.Information}>
        <p>
          <span className={styles.Title}>Name: </span>
          <span>{product.name}</span>
        </p>

        <p>
          <span className={styles.Title}>Size: </span>
          <span>{size}</span>
        </p>

        <p>
          <span className={styles.Title}>Price: </span>
          <span>{totalPrice}</span>
        </p>
        <div className={styles.Quantity}>
          <button
            className={styles.Button}
            data-line={line}
            disabled={!settled}
            onClick={decreaseQuantityHandler}
            type='button'
          >
            -
          </button>
          {!settled ? <span>...Loading</span> : <span>{quantity}</span>}

          <button
            className={styles.Button}
            data-line={line}
            disabled={!settled}
            onClick={increaseQuantityHandler}
            type='button'
          >
            +
          </button>
        </div>
      </div>
      <button className={styles.Remove} data-line={line} disabled={!settled} onClick={removeItemHandler} type='button'>
        X
      </button>
      <div
        className={clsx(styles.Loader, {
          [styles.Active]: isRemoving
        })}
      >
        <figure className='absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Loader className='w-full h-full' />
        </figure>
      </div>
    </div>
  );
};

export default CartItem;
