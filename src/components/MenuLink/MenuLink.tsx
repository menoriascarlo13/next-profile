/* eslint-disable no-console */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DEFAULT_SLUG, HOME_PAGE } from '@/configs/const';
import { MenuLinkPropsType } from '@/types/MenuLink';

const MenuLink = ({ label, link }: MenuLinkPropsType) => {
  const router = useRouter();

  console.log(router);
  console.log(link);
  const path = router.asPath.split('/').filter(Boolean);
  const isLinkActive = path[0] === link.cached_url || (router.asPath === DEFAULT_SLUG && link.cached_url === HOME_PAGE);

  return (
    <Link
      className={`text-black ${isLinkActive && 'font-bold'}`}
      href={`${link.cached_url === HOME_PAGE ? DEFAULT_SLUG : link.cached_url}`}
      locale='true'
    >
      {label}
    </Link>
  );
};

export default MenuLink;
