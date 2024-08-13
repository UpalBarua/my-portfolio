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
        justify: "start",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        maxW: "90%",
      })}
    >
      {techStack.map((tool) => (
        <span
          className={css({
            bg: "bg",
            border: "1px solid",
            borderColor: "fg/10",
            paddingX: 4,
            paddingY: 1,
            rounded: "lg",
          })}
          key={tool}
        >
          {tool}
        </span>
      ))}
    </div>
  );
};
