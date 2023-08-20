import Link from 'next/link';

import { CATEGORY_SLUG } from '@/configs/const';
import { CategoryType } from '@/types/CategoryType';

import NavSubCategoriesMenu from '../NavSubCategoriesMenu/NavSubCategoriesMenu';
import styles from './NavCategoriesMenu.module.css';

type NavCategoriesMenuPropType = {
  item: CategoryType[] | undefined;
};

const NavCategoriesMenu = ({ item }: NavCategoriesMenuPropType) => (
  <ul className={styles.Item}>
    {item &&
      item.map(({ category, subcategories, uri }) => (
        <li key={category} className={styles.SubItem}>
          <Link
            href={{
              pathname: `/${CATEGORY_SLUG}/${uri}`
            }}
          >
            {uri}
          </Link>
          <NavSubCategoriesMenu subcategories={subcategories} />
        </li>
      ))}
  </ul>
);

export default NavCategoriesMenu;
