import { navLinks } from '@/data/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiCodeBoxFill } from 'react-icons/ri';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Container } from '../UI/Container/Container';
import styles from './Header.module.scss';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <motion.header
      className={styles.Header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
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
    </motion.header>
  );
};
