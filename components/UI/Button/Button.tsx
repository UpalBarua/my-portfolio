import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  type: 'primary' | 'secondary' | 'rounded';
  as: 'button' | 'link';
  href?: string;
  target?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  as,
  href,
  target,
  ...props
}) => {
  if (as === 'link' && href && type === 'rounded') {
    return (
      <Link className={styles.RoundedLink} href={href} target={target}>
        {children}
      </Link>
    );
  }

  if (as === 'link' && href && type) {
    return (
      <Link
        className={styles.Button}
        href={href}
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
