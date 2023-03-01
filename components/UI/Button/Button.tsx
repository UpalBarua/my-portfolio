import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type: 'primary' | 'secondary';
}

export const Button = ({ children, type }: ButtonProps) => {
  return (
    <button className={styles.Button} data-type={type}>
      {children}
    </button>
  );
};
