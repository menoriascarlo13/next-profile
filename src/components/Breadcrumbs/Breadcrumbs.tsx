import clsx from 'clsx';
import Link from 'next/link';

import styles from './Breadcrumbs.module.css';

type BreadcrumbsPropsType = {
  className?: string;
  links: {
    categoryName: string;
    uri: string;
  }[];
  slug: string;
};

const Breadcrumbs = ({ className, links, slug = '' }: BreadcrumbsPropsType) => (
  <div className={clsx(styles.Breadcrumbs, className)}>
    {links.map(({ categoryName, uri }) => (
      <Link
        key={uri}
        href={{
          pathname: `${slug}${uri}`
        }}
        locale='false'
      >
        {categoryName}
      </Link>
    ))}
  </div>
);

export default Breadcrumbs;
