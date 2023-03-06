import Image from 'next/image';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';

import styles from './ProjectDetails.module.scss';

export const ProjectDetails = () => {
  return (
    <section className={styles.ProjectDetails}>
      <Image
        className={styles.Image}
        src="/images/project0.webp"
        alt="recruit co"
        height={350}
        width={1200}
      />
      <div className={styles.Header}>
        <Title>Recruit Co</Title>
        <div className={styles.Links}>
          <Button as="link" type="rounded" href={'/'} target="_blank">
            <BsFillPlayFill />
          </Button>
          <Button as="link" type="rounded" href={'/'} target="_blank">
            <BsGithub />
          </Button>
        </div>
      </div>

      {/* <Title>Screenshots</Title> */}
    </section>
  );
};
