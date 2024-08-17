import { Project } from "@/types";
import { hstack } from "styled-system/patterns";
import { css } from "styled-system/css";

type TechStackProps = {
  techStack: Project["techStack"];
};

export const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div
      className={hstack({
        gap: 2,
        justify: "start",
        alignItems: "center",
        maxW: "90%",
        flexWrap: "wrap",
      })}
    >
      {techStack.map((tool) => (
        <span
          className={css({
            border: "1px solid {colors.border}",
            rounded: "lg",
            paddingY: 1,
            paddingX: 4,
            bgColor: "background.muted",
          })}
          key={tool}
        >
          {tool}
        </span>
      ))}
    </div>
  );
};
