import { Button } from '../UI/Button/Button';
import { Title } from '../UI/Title/Title';
import { MdConstruction } from 'react-icons/md';
import styles from './UnderConstruction.module.scss';

export const UnderConstruction = () => {
  return (
    <section className={styles.UnderCon}>
      <MdConstruction className={styles.Icon} />
      <Title>This Page Is Under Construction</Title>
      <Button type="primary">Go Home</Button>
    </section>
  );
};
