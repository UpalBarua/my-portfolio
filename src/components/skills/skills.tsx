import { SectionInView } from "@/components/section-in-view";
import { SkillCard } from "@/components/skill-card/skill-card";
import { getAllSkills } from "@/lib/services";
import { grid, gridItem, flex } from "styled-system/patterns";
import { css } from "styled-system/css";

export async function Skills() {
  const skills = await getAllSkills();

  return (
    <SectionInView
      className={grid({
        gap: 16,
        border: "2px solid",
        borderColor: "fg/10",
        rounded: "2xl",
        roundedTopLeft: "3rem",
        roundedTopRight: "3rem",
        p: "10",
        bg: "dark.darker",
        columns: 2,
      })}
      id="skills"
      sectionName="Skills"
    >
      <div className={gridItem({})}>
        <h2
          className={css({
            display: "block",
            pb: "4",
            color: "blue",
          })}
        >
          Tech Stack
        </h2>
        <p
          className={css({
            pb: 6,
            letterSpacing: "tight",
            textTransform: "capitalize",
            fontSize: "5xl",
            fontWeight: "medium",
            lineHeight: "snug",
          })}
        >
          Tools that i use to build amazing web experiences.
        </p>
        <p
          className={css({
            maxW: "40rem",
            color: "fg/60",
            textWrap: "pretty",
            fontSize: "lg",
            lineHeight: "relaxed",
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis
          a non, quibusdam illum, sapiente debitis optio aspernatur ad nulla
          accusamus suscipit ipsam impedit libero! Esse repellendus adipisci non
          aspernatur.
        </p>
      </div>
      <ul
        className={flex({
          gap: 3,
          justify: "center",
          alignItems: "center",
          mx: "auto",
          wrap: "wrap",
        })}
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.iconUrl} index={index} {...skill} />
        ))}
      </ul>
    </SectionInView>
  );
}
