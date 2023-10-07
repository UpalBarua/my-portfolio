import { navLinks } from '@/data/data';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from './MobileMenu.module.scss';
import { motion } from 'framer-motion';

type MobileMenuProps = {
  activeSection: string;
};

export const MobileMenu = ({ activeSection }: MobileMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.Toggle} aria-label="Nav Toggle">
          <HiDotsHorizontal />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content} asChild>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}>
            {navLinks.map(({ title, link }) => (
              <DropdownMenu.Item
                className={styles.MenuItem}
                key={link}
                data-active={activeSection === title}>
                <Link href={link}>{title}</Link>
              </DropdownMenu.Item>
            ))}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
