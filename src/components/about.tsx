import { MotionDiv } from "@/components/motion-div";
import { SectionInView } from "@/components/section-in-view";

import { css } from "styled-system/css";
import { vstack, hstack, circle } from "styled-system/patterns";
import { contactLinks } from "@/config";

export function About() {
  return (
    <SectionInView
      className={css({
        layerStyle: "container",
        roundedBottomLeft: { md: "3rem" },
      })}
      id="about"
      sectionName="About"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <h2
          className={css({
            textStyle: "headline",
            pb: 6,
          })}
        >
          Get to Know Me
        </h2>
        <div
          className={vstack({
            textStyle: "text",
            gap: 4,
            color: "foreground.secondary",
            fontSize: "lg",
          })}
        >
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
        <h2
          className={css({
            textStyle: "title",
            pt: 8,
            pb: 4,
          })}
        >
          Get in touch
        </h2>
        <div
          className={hstack({
            gap: 1,
            alignSelf: "start",
          })}
        >
          {contactLinks.map(({ icon: Icon, href }) => (
            <a
              className={circle({
                size: 12,
                transition: "background-color 300ms ease",
                "&:hover,&:focus-visible": {
                  bgColor: "background.muted",
                },
              })}
              key={href}
              href={href}
              target="_blank"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </MotionDiv>
    </SectionInView>
  );
}
