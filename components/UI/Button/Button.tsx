import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type: 'primary' | 'secondary';
  as: 'button' | 'link';
  href?: string;
}

export const Button = ({ children, type, as, href }: ButtonProps) => {
  if (as === 'link' && href) {
    return (
      <Link href={href} className={styles.Button} data-type={type}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.Button} data-type={type}>
      {children}
    </button>
  );
};
