import clsx from 'clsx';

import getCurrentEnvironment from '@/tools/getCurrrentEnvironment';
import { MenuListPropsType } from '@/types/MenuList';

import MenuLink from '../MenuLink/MenuLink';

const MenuList = ({ content }: MenuListPropsType) =>
  content.header_menu &&
  content.header_menu.map(({ _uid, environment, label, link }) => (
    <li key={_uid} className={clsx({ hidden: !getCurrentEnvironment({ targetEnvironment: environment }) })}>
      <MenuLink label={label} link={link} />
    </li>
  ));

export default MenuList;
