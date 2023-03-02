import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <main className={styles.Hero}>
      <Image
        className={styles.Avatar}
        src="/images/avatar.svg"
        alt="avatar"
        height={250}
        width={250}
      />
      <h1 className={styles.Title}>
        Hi, I'm <span>Upal</span>
        <br />
        an enthusiastic developer
      </h1>
      <p className={styles.Text}>
        I build <span>design systems</span> and code websites for{' '}
        <span>leaders</span> and brands all around the world.
      </p>
      <div className={styles.ButtonGroup}>
        <Button type="primary">My Projects</Button>
        <Button type="secondary">My Resume</Button>
      </div>
    </main>
  );
};
