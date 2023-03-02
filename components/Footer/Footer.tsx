import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Links}>
        <Link href="/">Home</Link>
        <Link href="/">GitHub</Link>
        <Link href="/">Linkedin</Link>
        <Link href="/">Contact</Link>
      </div>
      <p className={styles.Copyright}>Made in Bangladesh 🇧🇩</p>
    </footer>
  );
};
