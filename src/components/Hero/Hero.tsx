import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

export const Hero = () => {
  return (
    <main className={styles.Hero}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'tween', delay: 0.125 }}
        className={styles.Avatar}>
        <Image src="/images/avatar.svg" alt="avatar" quality={95} fill />
      </motion.div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className={styles.Heading}>
        <strong>Hello 👋, I'm Upal.</strong> I bring ideas to life by crafting
        <em> intuitive and dynamic web experiences</em> with an eye for design
        and a <u>passion for coding.</u>
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.ButtonGroup}>
        <Button variant="primary" href="#contact" asLink>
          Contact Me
          <BsArrowRight />
        </Button>
        <Button
          variant="secondary"
          href="https://drive.google.com/file/d/1fAZLlu-XvqSaNsEETEspeyUlhd1XvMT6/view?usp=share_link"
          target="_blank"
          asLink>
          My Resume <BsArrowUpRight />
        </Button>
      </motion.div>
    </main>
  );
};
