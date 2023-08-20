/* eslint-disable no-console */
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import CartModal from '@/components/CartModal/CartModal';
import Image from '@/components/Image/Image';
import MenuList from '@/components/MenuList/MenuList';
import NavCategoriesMenu from '@/components/NavCategoriesMenu/NavCategoriesMenu';
import { ProductService } from '@/context/ProductService';
import useDesktop from '@/hooks/useDesktop';
import isTypeBoolean from '@/tools/isTypeBoolean';

import styles from './Headers.module.css';

const Header = ({ header, prop }: any) => {
  const isDesktop = useDesktop();
  const router = useRouter();
  const { addToCart, currentItems, currentTotalQuantity, currentTotals } = useContext(ProductService);
  const [showNav, setShowNav] = useState<boolean>();
  const [itemTotalQuantity, setItemTotalQuantity] = useState(currentTotalQuantity);
  const [settling, setSettling] = useState<boolean>(false);
  const [showCart, setShowCart] = useState(false);

  const cartModalHandler = useCallback(() => setShowCart(!showCart), [showCart]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setShowNav(false));

    return () => router.events.off('routeChangeComplete', () => setShowNav(false));
  }, [router.events, showNav]);

  useEffect(() => {
    setSettling(addToCart);

    const timer = setTimeout(() => {
      setSettling(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [addToCart, currentTotalQuantity]);

  useEffect(() => {
    setItemTotalQuantity(currentTotalQuantity);
  }, [currentTotalQuantity]);

  const NavCategoriesMenuMemo = useMemo(() => <NavCategoriesMenu item={prop.category.group} />, [prop.category.group]);

  const MenuListMemo = useMemo(() => <MenuList content={header} />, [header]);

  const navButtonHandler = () => setShowNav(!showNav);

  const CartModalMemo = useMemo(
    () => (
      <CartModal
        className={showCart ? 'opacity-1 z-[2] pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}
        continueShopping={() => cartModalHandler()}
        items={currentItems}
        totals={currentTotals}
      />
    ),
    [cartModalHandler, currentItems, currentTotals, showCart]
  );

  return (
    <>
      {((!isDesktop && showNav) || showCart) && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={styles.ModalOverlay} onClick={showCart ? cartModalHandler : navButtonHandler} />
      )}
      <nav className={`${styles.Nav} drop-shadow-xl`}>
        {isDesktop ? (
          <ul className={styles.NavMainMenu}>
            {MenuListMemo}

            <li className={styles.Category}>
              <p className={styles.Link}>Category</p>
              {NavCategoriesMenuMemo}
            </li>
          </ul>
        ) : (
          <div className={styles.HamburgerWrapper}>
            <button
              className={clsx(styles.Hamburger, {
                [styles.active]: showNav
              })}
              onClick={navButtonHandler}
              type='button'
            >
              <span
                className={`${
                  isTypeBoolean(showNav) && (showNav ? 'active' : 'inactive')
                } leading-[32px] h-[37px] font-anicons`}
              >
                A
              </span>
            </button>
          </div>
        )}

        <div className={`${styles.NavRight} mr-[12px]`}>
          <button className={styles.Cart} onClick={cartModalHandler} type='button'>
            <Image alt='Cart' height={20} src='/cart.png' width={20} />

            <div className={clsx(styles.Quantity, settling ? 'animate-bounce' : '')}>{itemTotalQuantity}</div>
          </button>

          {/* {Country} */}
        </div>
        {!isDesktop && showNav && (
          <div className='absolute -bottom-[100vh] h-[100vh] w-[50vw] left-0 bg-white px-6 pt-4 z-[1]'>
            <ul className={styles.NavMainMenu}>
              {MenuListMemo}

              <li className={styles.Category}>
                <p className={styles.Link}>Category</p>
                {NavCategoriesMenuMemo}
              </li>
            </ul>
          </div>
        )}

        {CartModalMemo}
      </nav>
    </>
  );
};

export default Header;
