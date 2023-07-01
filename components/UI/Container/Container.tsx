import React, { FC, CSSProperties, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const Container: FC<ContainerProps> = ({
  children,
  style,
  ...restProps
}) => {
  return (
    <div className={styles.Container} style={style} {...restProps}>
      {children}
    </div>
  );
};
