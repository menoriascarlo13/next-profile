import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './Grid.module.css';

type GridPropsType = {
  children: ReactNode;
  className?: string;
};

const Grid = ({ children, className }: GridPropsType) => (
  <div className={styles.Container}>
    <div className={clsx(styles.Grid, className)}>{children}</div>
  </div>
);

export default Grid;
