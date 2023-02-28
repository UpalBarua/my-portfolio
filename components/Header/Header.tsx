import { useState } from 'react';
import Link from 'next/link';
import { RiCodeBoxFill } from 'react-icons/ri';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from './Header.module.scss';

const NAV_OPTIONS = [
  {
    id: 0,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'Projects',
    link: '/projects',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    title: 'Articles',
    link: '/articles',
  },
];

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <header className={styles.Header}>
      <Link className={styles.Logo} href="/">
        <RiCodeBoxFill className={styles.Icon} />
        <span>Upal Barua</span>
      </Link>
      <nav>
        <ul className={styles.NavMenu} data-open={isNavOpen}>
          {NAV_OPTIONS.map(({ id, title, link }) => (
            <li key={id}>
              <Link className={styles.NavLink} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.NavToggle} onClick={handleNavToggle}>
        <HiDotsHorizontal />
      </button>
    </header>
  );
};
