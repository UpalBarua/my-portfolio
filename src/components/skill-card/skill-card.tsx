"use client";

import Image from "next/image";

import { MotionDiv } from "@/components/motion-div";
import { Skill } from "@/lib/services";
import { hstack, aspectRatio } from "styled-system/patterns";

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
      className={hstack({
        border: "1px solid",
        borderColor: "fg/15",
        rounded: "lg",
        // h: "3.5rem",
        py: 2,
        px: 4,
        bg: "bg",
      })}
      // variants={fadeInAnimationVariants}
      // initial="initial"
      // whileInView="animate"
      // viewport={{
      //   once: true,
      // }}
      // custom={index}
    >
      <Image
        className={aspectRatio({
          ratio: 1 / 1,
          objectPosition: "center",
          objectFit: "contain",
          w: "2rem",
        })}
        src={iconUrl}
        alt={name}
        width={80}
        height={80}
      />
      <p>{name}</p>
    </MotionDiv>
  );
}
