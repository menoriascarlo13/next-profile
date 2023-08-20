import clsx from 'clsx';
import Link from 'next/link';

import { LinksPropsType } from '@/types/Links';

import styles from './Links.module.css';

const LinkVariant = {
  primary: 'primary link',
  secondary: 'secondary link'
};

const Links = ({ className, data, variant = 'primary' }: LinksPropsType) => {
  if (!Array.isArray(data)) return null;

  return data?.map(({ _uid, label, link }) => (
    <Link
      key={_uid}
      className={clsx(className, styles.Links, LinkVariant[variant])}
      href={link.cached_url || link.url || ''}
      target={link?.target}
    >
      {label}
    </Link>
  ));
};

export default Links;
