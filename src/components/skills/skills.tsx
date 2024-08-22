import { SectionInView } from "@/components/section-in-view";
import { SkillCard } from "@/components/skill-card/skill-card";
import { skillsList } from "@/config";

import { css } from "styled-system/css";
import { flex, grid, gridItem } from "styled-system/patterns";

export function Skills() {
  return (
    <SectionInView
      className={grid({
        layerStyle: "container",
        gap: 16,
        justifyContent: {
          base: "start",
          mdToXl: "center",
        },
        alignItems: "center",
        roundedTopLeft: "3rem",
        roundedTopRight: "3rem",
        mb: 4,
        p: 14,
        textAlign: {
          base: "start",
          mdToXl: "center",
        },
        columns: {
          base: 1,
          xl: 2,
        },
      })}
      id="skills"
      sectionName="Skills"
    >
      <div className={gridItem({})}>
        <p
          className={css({
            textStyle: "headline",
            pb: 6,
          })}
        >
          My go-to toolkit for crafting awesome web experiences 🔧
        </p>
        <p
          className={css({
            textStyle: "text",
            mx: "auto",
            color: "foreground.secondary",
            fontSize: "lg",
          })}
        >
          I’m all about the MERN stack, but Next.js, TypeScript, and Tailwind
          are my faves! Lately, I’m diving into Panda CSS to add a fresh twist
          to my projects.
        </p>
      </div>
      <ul
        className={flex({
          gap: 3,
          justify: {
            base: "start",
            md: "center",
          },
          alignItems: "center",
          mx: "auto",
          wrap: "wrap",
        })}
      >
        {skillsList.map((skill, index) => (
          <SkillCard key={skill.iconUrl} index={index} {...skill} />
        ))}
      </ul>
    </SectionInView>
  );
}
