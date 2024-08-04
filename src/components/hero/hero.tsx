import { FileText, Mail } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/UI/Button/Button";
import { MotionDiv } from "@/components/motion-div";
import { SectionInView } from "@/components/section-in-view";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <SectionInView sectionName="Home" className={styles.hero}>
      <MotionDiv
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", delay: 0.125, duration: 0.3 }}
        className={styles.avatar}
      >
        <Image
          src="/images/avatar.svg"
          alt="avatar"
          quality={95}
          height="200"
          width="200"
          priority
        />
      </MotionDiv>
      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <h1 className={styles.heading}>
          <strong>Hello 👋, I'm Upal.</strong> I bring ideas to life by crafting
          <em> intuitive and dynamic web experiences</em> with an eye for design
          and a <u>passion for coding.</u>
        </h1>
      </MotionDiv>
      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.buttonGroup}
      >
        <Button variant="primary" href="#contact" asLink>
          <Mail />
          <span>Contact Me</span>
        </Button>
        <Button
          variant="secondary"
          href="https://drive.google.com/file/d/1fAZLlu-XvqSaNsEETEspeyUlhd1XvMT6/view?usp=share_link"
          target="_blank"
          asLink
        >
          <FileText /> <span>My Resume</span>
        </Button>
      </MotionDiv>
    </SectionInView>
  );
};
