import { ExternalLink, FileText } from "lucide-react";

import { css } from "styled-system/css";
import { circle, grid } from "styled-system/patterns";

export function ResumeLink() {
  return (
    <a
      className={grid({
        layerStyle: "container",
        pos: "relative",
        alignContent: "start",
        gridTemplateColumns: "1fr max-content",
        roundedTopLeft: { md: "3rem" },
        p: {
          base: 6,
          md: 8,
        },
        overflow: "hidden",
      })}
      href="#"
    >
      <h2
        className={css({
          textStyle: "title",
        })}
      >
        My Resume
      </h2>
      <span
        className={circle({
          border: "1px solid {colors.border}",
          size: "12",
          color: "accent",
          bg: "background.muted",
        })}
      >
        <ExternalLink />
      </span>
      <p
        className={css({
          textStyle: "text",
          gridColumn: "full",
          fontSize: "lg",
        })}
      >
        A snapshot of my journey, showcasing skills, experiences, and
        achievements in web development.
      </p>
      <FileText
        className={css({
          pos: "absolute",
          right: 0,
          bottom: "-10%",
          rotate: "-20deg",
          width: "10rem",
          height: "10rem",
          color: "accent",
          opacity: 0.125,
        })}
        strokeWidth={1}
      />
    </a>
  );
}
