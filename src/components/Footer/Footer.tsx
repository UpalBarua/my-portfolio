import { footerLinks } from '@/data/data';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Links}>
        {footerLinks.map(({ href, label, target }) => (
          <Link key={href} href={href} target={target}>
            {label}
          </Link>
        ))}
      </div>
      <p className={styles.Copyright}>&copy; 2023 All rights reserved.</p>
    </footer>
  );
};
