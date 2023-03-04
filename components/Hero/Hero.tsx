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
        Hi, I&apos;m <span>Upal</span>
        <br />
        an &#123;enthusiastic&#125; developer
      </h1>
      <p className={styles.Text}>
        I build <span>design systems</span> and code websites for{' '}
        <span>leaders</span> and brands all around the world.
      </p>
      <div className={styles.ButtonGroup}>
        <Button type="primary" as="link" href="/projects">
          My Projects
        </Button>
        <Button
          type="secondary"
          as="link"
          href="https://drive.google.com/file/d/1fAZLlu-XvqSaNsEETEspeyUlhd1XvMT6/view?usp=share_link"
          target="_blank">
          My Resume
        </Button>
      </div>
    </main>
  );
};
