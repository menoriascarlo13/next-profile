/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import React from 'react';

import ButtonVariant from '@/configs/buttonVariant';
import { ButtonPropsType } from '@/types/ButtonType';

import styles from './Button.module.css';

const Button = ({ children, className, label, type = 'button', variant = 'primary', ...props }: ButtonPropsType) => (
  <button className={clsx('button', styles.Button, ButtonVariant[variant], className)} type={type} {...props}>
    {label}
    {children}
  </button>
);
export default Button;
