import { Skill } from "@/lib/services";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./SkillCard.module.scss";

type SkillCardProps = Skill & {
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

export const SkillCard = ({ name, iconUrl, index }: SkillCardProps) => {
  return (
    <motion.li
      className={styles.SkillCard}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <Image
        className={styles.Icon}
        src={iconUrl}
        alt={name}
        height={80}
        width={80}
      />
      <p>{name}</p>
    </motion.li>
  );
};
