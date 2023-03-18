import React, { CSSProperties, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Container = ({
  children,
  style,
  ...restProps
}: ContainerProps) => {
  return (
    <div className={styles.Container} style={style} {...restProps}>
      {children}
    </div>
  );
};
