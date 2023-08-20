/* eslint-disable no-console */
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

import MenuList from '@/components/MenuList/MenuList';
import useDesktop from '@/hooks/useDesktop';
import isTypeBoolean from '@/tools/isTypeBoolean';

import styles from './Headers.module.css';

const Header = ({ header }: any) => {
  const isDesktop = useDesktop();
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>();
  const [showCart, setShowCart] = useState(false);

  const cartModalHandler = useCallback(() => setShowCart(!showCart), [showCart]);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => setShowNav(false));

    return () => router.events.off('routeChangeComplete', () => setShowNav(false));
  }, [router.events, showNav]);

  const MenuListMemo = useMemo(() => <MenuList content={header} />, [header]);

  const navButtonHandler = () => setShowNav(!showNav);

  return (
    <>
      {((!isDesktop && showNav) || showCart) && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={styles.ModalOverlay} onClick={showCart ? cartModalHandler : navButtonHandler} />
      )}
      <nav className={`${styles.Nav} drop-shadow-xl`}>
        {isDesktop ? (
          <ul className={styles.NavMainMenu}>{MenuListMemo}</ul>
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

        {!isDesktop && showNav && (
          <div className='absolute -bottom-[100vh] h-[100vh] w-[50vw] left-0 bg-white px-6 pt-4 z-[1]'>
            <ul className={styles.NavMainMenu}>{MenuListMemo}</ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
