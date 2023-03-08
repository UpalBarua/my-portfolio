import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  return (
    <section className={styles.AboutMe}>
      <Title>About Me</Title>
      <div className={styles.Grid}>
        <div className={styles.Column}>
          <h2 className={styles.Title}>Hey 👋</h2>
          <p className={styles.Text}>
            My name is <strong>Upal Barua</strong>. I&apos;m a designer and
            developer from <strong>Bangladesh</strong>.
          </p>
          <p className={styles.Text}>
            I&apos;ve been a designer and developer for over{' '}
            <strong>3 years</strong> now. I&apos;m currently focusing on
            designing UIs and building applications using Javascript/React.
          </p>
          {/* <p className={styles.Text}>
            The project I&apos;m the most proud of is{' '}
            <strong>Flitsmeister</strong>, which started as an app I built with{' '}
            <strong>Sjoerd</strong> and Jorn to prevent us from getting speeding
            tickets. It&apos;s now a profitable business and has over
            <strong>1.800.000 active users</strong> in The EU. Being able to
            both design and develop is a lot of fun. When you have an idea,
            there&apos;s nothing holding you back from building it. You can view
            my previous personal website over here.
          </p> */}
        </div>
        <div className={styles.Column}>
          <Image
            className={styles.Image}
            src="/images/about-me-img.jpeg"
            alt="Upal Barua"
            height={500}
            width={500}
          />
          <p className={styles.FollowText}>
            Follow me on{' '}
            <Link href="https://github.com/upalbarua" target="_blank">
              Github
            </Link>{' '}
            and{' '}
            <Link href="https://www.linkedin.com/in/upalb" target="_blank">
              LinkedIn
            </Link>{' '}
            or send me and{' '}
            <Link href="https://upalbarua52@gmail.com" target="_blank">
              email
            </Link>
          </p>
          <Button type="primary" as="link" href="/contact">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
