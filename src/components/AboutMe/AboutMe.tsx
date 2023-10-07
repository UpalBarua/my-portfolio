import useSectionInView from '@/hooks/useSectionInView';
import { motion } from 'framer-motion';
import { Title } from '../UI/Title/Title';
import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className={styles.AboutMe}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}>
      <Title>About Me</Title>
      <div className={styles.Text}>
        <p className={styles.Text}>
          My name is <strong>Upal Barua</strong>, and I'm a designer and
          developer who is passionate about creating intuitive and dynamic
          websites and web apps. Over the past <strong>3 years</strong> I have
          been dedicated to learning and mastering my craft, and I am currently
          focused on designing and developing digital solutions using the{' '}
          <strong>MERN stack</strong>. I am particularly skilled in CSS and
          React. As a tech enthusiast, I am always seeking to expand my
          knowledge and improve myself, both personally and professionally.
        </p>
        <p className={styles.Text}>
          Aside from coding, I love listening to music and having deep
          conversations with others about life, philosophy, and everything in
          between. I believe that being able to connect with others on a deeper
          level is essential to building strong relationships and creating
          meaningful work.
        </p>
      </div>
    </motion.section>
  );
};
