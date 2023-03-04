import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type: 'primary' | 'secondary';
  as: 'button' | 'link';
  href?: string;
  target?: string;
}

export const Button = ({
  children,
  type,
  as,
  href,
  target,
  ...props
}: ButtonProps) => {
  if (as === 'link' && href) {
    return (
      <Link
        href={href}
        className={styles.Button}
        data-type={type}
        target={target}
        {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.Button} data-type={type} {...props}>
      {children}
    </button>
  );
};
