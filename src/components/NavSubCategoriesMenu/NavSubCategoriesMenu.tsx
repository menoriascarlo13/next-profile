import Link from 'next/link';

import { CATEGORY_SLUG } from '@/configs/const';
import { CategoryType } from '@/types/CategoryType';

import styles from './NavSubMenuCategoriesMenu.module.css';

type NavSubCategoriesMenuPropType = {
  subcategories?: CategoryType[];
};

const NavSubCategoriesMenu = ({ subcategories = [] }: NavSubCategoriesMenuPropType) => (
  <ul className={styles.NavSubMenu}>
    {subcategories.map(
      ({ inCategory, name, uri }) =>
        name[name.length - 1].length > 0 &&
        inCategory && (
          <li key={name[name.length - 1]}>
            <Link
              href={{
                pathname: `/${CATEGORY_SLUG}/${uri}`
              }}
            >
              {name[name.length - 1]}
            </Link>
          </li>
        )
    )}
  </ul>
);

export default NavSubCategoriesMenu;
