import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { navLinks } from '@/data/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiCodeBoxFill } from 'react-icons/ri';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import styles from './Header.module.scss';

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      className={styles.Header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}>
      <div className="container">
        <Link className={styles.Logo} href="/">
          <RiCodeBoxFill className={styles.Icon} />
          <span>Upal Barua</span>
        </Link>
        <nav>
          <ul className={styles.NavMenu}>
            {navLinks.map(({ title, link }) => (
              <li key={link}>
                <Link
                  className={styles.NavLink}
                  href={link}
                  data-active={activeSection === title}
                  onClick={() => {
                    setActiveSection(title);
                    setTimeOfLastClick(Date.now());
                  }}>
                  {title}
                  {activeSection === title && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu activeSection={activeSection} />
      </div>
    </motion.header>
  );
};
