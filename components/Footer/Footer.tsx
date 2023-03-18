import Link from 'next/link';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    id: 0,
    href: '/',
    label: 'Home',
    target: '',
  },
  {
    id: 1,
    href: 'https://github.com/upalbarua',
    label: 'GitHub',
    target: '_blank',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/upalb',
    label: 'Linkedin',
    target: '_blank',
  },
  {
    id: 3,
    href: '/contact',
    label: 'Contact',
    target: '',
  },
];

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Links}>
        {footerLinks.map(({ id, href, label, target }) => (
          <Link key={id} href={href} target={target}>
            {label}
          </Link>
        ))}
      </div>
      <p className={styles.Copyright}>&copy; 2023 All rights reserved.</p>
    </footer>
  );
};
