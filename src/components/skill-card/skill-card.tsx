"use client";

import Image from "next/image";

import { MotionDiv } from "@/components/motion-div";
import { Skill } from "@/lib/services";
import { aspectRatio, hstack } from "styled-system/patterns";
import { css } from "styled-system/css";

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
        border: "2px solid {colors.border}",
        rounded: "xl",
        py: 2,
        px: 4,
        bgColor: "background.muted",
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
          ratio: 1,
          objectPosition: "center",
          objectFit: "contain",
          w: {
            base: "1.75rem",
            md: "2rem",
          },
        })}
        src={`/icons/${iconUrl}`}
        alt={name}
        width={80}
        height={80}
      />
      <p>{name}</p>
    </MotionDiv>
  );
}
