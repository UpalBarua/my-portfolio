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
        <h2
          className={css({
            display: "block",
            pb: "4",
            color: "warning",
            fontSize: "lg",
          })}
        >
          My Tech Stack
        </h2>
        <p
          className={css({
            textStyle: "headline",
            pb: 6,
          })}
        >
          Tools that i use to build these amazing web experiences. 🧰
        </p>
        <p
          className={css({
            textStyle: "text",
            mx: "auto",
            color: "foreground.secondary",
            fontSize: "lg",
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
