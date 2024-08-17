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
        roundedTopLeft: "3rem",
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
          bg: "background.muted",
        })}
      >
        <ExternalLink />
      </span>
      <p
        className={css({
          textStyle: "text",
          gridColumn: "full",
          maxW: "25ch",
          color: "foreground.secondary",
          fontSize: "lg",
        })}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        quod hic perspiciatis aliquid.
      </p>
      <FileText
        className={css({
          pos: "absolute",
          right: 0,
          bottom: "-20%",
          rotate: "-20deg",
          width: "10rem",
          height: "10rem",
          color: "accent",
        })}
        strokeWidth={1}
      />
    </a>
  );
}
