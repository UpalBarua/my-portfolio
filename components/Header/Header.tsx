import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const { pathname } = useRouter();

  const handleNavToggle = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const handleNavAutoHide = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavAutoHide);
    return () => window.removeEventListener('scroll', handleNavAutoHide);
  }, []);

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
              <Link
                className={styles.NavLink}
                href={link}
                data-active={pathname === link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className={styles.ButtonGroup}>
        <button className={styles.ThemeToggle}>
          <BsFillMoonStarsFill />
        </button>
      </div> */}
      <button className={styles.NavToggle} onClick={handleNavToggle}>
        <HiDotsHorizontal />
      </button>
    </header>
  );
};
