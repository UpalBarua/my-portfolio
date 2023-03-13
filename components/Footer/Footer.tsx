import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Links}>
        <Link href="/">Home</Link>
        <Link href="https://github.com/upalbarua" target="_blank">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/upalb" target="_blank">
          Linkedin
        </Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className={styles.Copyright}>&copy; 2023 All rights reserved.</p>
    </footer>
  );
};
