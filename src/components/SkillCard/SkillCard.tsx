import { skillsList } from '@/data/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './SkillCard.module.scss';

type SkillCardProps = {
  icon: (typeof skillsList)[number]['icon'];
  title: (typeof skillsList)[number]['title'];
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
      delay: 0.05 * index,
    },
  }),
};

export const SkillCard = ({ icon, title, index }: SkillCardProps) => {
  return (
    <motion.li
      className={styles.SkillCard}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}>
      <div className={styles.Icon}>
        <Image src={`/icons/${icon}`} alt={title} fill />
      </div>
      <p>{title}</p>
    </motion.li>
  );
};
