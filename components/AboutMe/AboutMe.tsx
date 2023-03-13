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
            My name is <strong>Upal Barua</strong>, and I'm a designer and
            developer who is passionate about creating intuitive and dynamic
            websites and web apps. Over the past 3 years, I have been dedicated
            to learning and mastering my craft, and I am currently focused on
            designing and developing digital solutions using the MERN stack. I
            am particularly skilled in CSS and React.As a tech enthusiast, I am
            always seeking to expand my knowledge and improve myself, both
            personally and professionally.
          </p>
          <p className={styles.Text}>
            Aside from coding, I love listening to music and having deep
            conversations with others about life, philosophy, and everything in
            between. I believe that being able to connect with others on a
            deeper level is essential to building strong relationships and
            creating meaningful work.
          </p>
          <p className={styles.Text}>
            If you have a project in mind or just want to chat, feel free to get
            in touch. I would love to hear from you!
          </p>
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
