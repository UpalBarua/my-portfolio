"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5";
import { Button } from "../UI/Button/Button";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section className={styles.Hero} ref={ref}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", delay: 0.125, duration: 0.3 }}
        className={styles.Avatar}
      >
        <Image
          src="/images/avatar.svg"
          alt="avatar"
          quality={95}
          fill
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className={styles.Heading}
      >
        <strong>Hello 👋, I'm Upal.</strong> I bring ideas to life by crafting
        <em> intuitive and dynamic web experiences</em> with an eye for design
        and a <u>passion for coding.</u>
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.ButtonGroup}
      >
        <Button variant="primary" href="#contact" asLink>
          <IoMailOutline />
          <span>Contact Me</span>
        </Button>
        <Button
          variant="secondary"
          href="https://drive.google.com/file/d/1fAZLlu-XvqSaNsEETEspeyUlhd1XvMT6/view?usp=share_link"
          target="_blank"
          asLink
        >
          <IoDocumentTextOutline /> <span>My Resume</span>
        </Button>
      </motion.div>
    </section>
  );
};
