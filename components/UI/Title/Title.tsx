import React from 'react';
import styles from './Title.module.scss';

export const Title = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className={styles.Title} {...props}>
      {children}
    </h2>
  );
};
