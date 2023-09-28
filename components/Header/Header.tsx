import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiCodeBoxFill } from 'react-icons/ri';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Container } from '../UI/Container/Container';
import styles from './Header.module.scss';

const NAV_OPTIONS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Articles',
    link: '/articles',
  },
];

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.Header}>
      <Container>
        <Link className={styles.Logo} href="/">
          <RiCodeBoxFill className={styles.Icon} />
          <span>Upal_Barua</span>
        </Link>
        <nav>
          <ul className={styles.NavMenu}>
            {NAV_OPTIONS.map(({ title, link }) => (
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
        <MobileMenu navOptions={NAV_OPTIONS} pathname={pathname} />
      </Container>
    </header>
  );
};
