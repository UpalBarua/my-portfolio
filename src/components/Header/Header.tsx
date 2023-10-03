import { navLinks } from '@/data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RiCodeBoxFill } from 'react-icons/ri';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Container } from '../UI/Container/Container';
import styles from './Header.module.scss';

export const Header = () => {
  const { pathname } = useRouter();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const getScrollY = () => {
      const { scrollY } = window;
      if (scrollY > 0) {
        setScrollY(scrollY);
      }
    };

    window.addEventListener('scroll', getScrollY);

    return () => window.removeEventListener('scroll', getScrollY);
  }, []);

  const headerBg = {
    backgroundColor:
      scrollY >= 40 ? 'hsl(var(--color-primary-950), 0.8)' : 'transparent',
    backdropFilter: scrollY >= 40 ? 'blur(1rem)' : 'blur(0)',
  };

  return (
    <header className={styles.Header} style={headerBg}>
      <Container>
        <Link className={styles.Logo} href="/">
          <RiCodeBoxFill className={styles.Icon} />
          <span>Upal_Barua</span>
        </Link>
        <nav>
          <ul className={styles.NavMenu}>
            {navLinks.map(({ title, link }) => (
              <li key={link}>
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
        <MobileMenu pathname={pathname} />
      </Container>
    </header>
  );
};
