import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonType = 'checkout' | 'primary' | 'secondary';

export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  label?: string;
  variant?: ButtonType;
};
