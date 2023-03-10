import React from 'react';
import styles from './Container.module.scss';

export const Container = ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.Container} {...restProps}>
      {children}
    </div>
  );
};
