"use client";

import Image from "next/image";

import { MotionDiv } from "@/components/motion-div";
import { Skill } from "@/lib/services";

import styles from "./skill-card.module.scss";

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

export function SkillCard({ name, iconUrl, index }: Readonly<SkillCardProps>) {
  return (
    <MotionDiv
      className={styles.skillCard}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <Image
        className={styles.icon}
        src={iconUrl}
        alt={name}
        height={80}
        width={80}
      />
      <p>{name}</p>
    </MotionDiv>
  );
}
