import { ReactNode } from 'react';
import styles from './Title.module.scss';

export const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.Title}>{children}</h2>;
};
