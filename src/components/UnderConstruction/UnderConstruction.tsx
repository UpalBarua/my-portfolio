import { FC } from 'react';
import { Title } from '../UI/Title/Title';
import { MdConstruction } from 'react-icons/md';
import styles from './UnderConstruction.module.scss';

export const UnderConstruction: FC = () => {
  return (
    <section className={styles.UnderCon}>
      <MdConstruction className={styles.Icon} />
      <Title>This Page Is Under Construction</Title>
    </section>
  );
};
