import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Title: FC<TitleProps> = ({ children, style }) => {
  return (
    <h2 className={styles.Title} style={style}>
      {children}
    </h2>
  );
};
