import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <main className={styles.Hero}>
      <div className={styles.Avatar}>
        <Image src="/images/avatar.svg" alt="avatar" fill />
      </div>
      <h1 className={styles.Title}>
        Hi, I&apos;m <span>Upal</span>
        <br />
        an <span>&#123;</span>enthusiastic<span>&#125;</span> developer!
      </h1>
      <p className={styles.Text}>
        I bring ideas to life by crafting{' '}
        <strong>intuitive and dynamic web experience </strong>
        with an eye for design and a passion for coding
      </p>
      <div className={styles.ButtonGroup}>
        <Button variant="primary" href="/projects" asLink>
          Projects
        </Button>
        <Button
          variant="secondary"
          href="https://drive.google.com/file/d/1fAZLlu-XvqSaNsEETEspeyUlhd1XvMT6/view?usp=share_link"
          target="_blank"
          asLink>
          Resume
        </Button>
      </div>
    </main>
  );
};
