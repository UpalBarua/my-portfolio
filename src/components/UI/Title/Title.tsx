import { CSSProperties, ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export const Title = ({ children, style }: TitleProps) => {
  return (
    <h2 className={styles.Title} style={style}>
      {children}
    </h2>
  );
};
