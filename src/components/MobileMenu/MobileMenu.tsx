import { navLinks } from '@/data/data';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from './MobileMenu.module.scss';

type MobileMenuProps = {
  pathname: string;
};

export const MobileMenu = ({ pathname }: MobileMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.Toggle} aria-label="Customise options">
          <HiDotsHorizontal />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content}>
          {navLinks.map(({ title, link }) => (
            <DropdownMenu.Item className={styles.MenuItem} key={link}>
              <Link
                className={styles.NavLink}
                href={link}
                data-active={pathname === link}>
                {title}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
