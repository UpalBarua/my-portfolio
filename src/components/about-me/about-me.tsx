import { MotionDiv } from "@/components/motion-div";
import { SectionInView } from "@/components/section-in-view";
import { Title } from "@/components/UI/Title/Title";

import styles from "./about-me.module.scss";

export const AboutMe = () => {
  return (
    <SectionInView id="about" sectionName="About">
      <MotionDiv
        className={styles.AboutMe}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Title>About Me</Title>
        <div className={styles.Text}>
          <p>
            Hello, I'm Upal Barua, a dedicated <strong>developer</strong>{" "}
            passionate about creating{" "}
            <strong>user-friendly web applications</strong>. About a year ago, I
            made the decision to pursue a career in <strong>development</strong>{" "}
            after exploring various aspects of technology as a hobby for years.
          </p>
          <p>
            I've primarily been <strong>self-taught</strong>, but I also
            completed a <strong>bootcamp</strong> to accelerate my learning.
            During this journey, I've been intently focused on improving my
            skills. Currently, my main focus is on developing digital solutions
            using the <strong>MERN stack</strong>, where I have special
            expertise in <strong>CSS and React</strong>. I've recently delved
            into <strong>TypeScript</strong> and <strong>Next.js</strong>,
            expanding my knowledge even further.{" "}
            <strong>Backend development</strong> also holds my interest.
          </p>
          <p>
            I'm actively searching for a full-time{" "}
            <strong>software developer</strong> position to gain practical
            experience and collaborate with like-minded individuals who share my
            passion for <strong>coding</strong>.
          </p>
        </div>
      </MotionDiv>
    </SectionInView>
  );
};
