import { MapPin, Navigation } from "lucide-react";
import { css } from "styled-system/css";
import { grid, square } from "styled-system/patterns";

export function CurrentPosition() {
  return (
    <div
      className={grid({
        layerStyle: "container",
        rowGap: 8,
        columnGap: 5,
        gridTemplateColumns: "max-content auto",
        roundedBottomRight: "3rem",
        p: {
          base: 6,
          md: 8,
        },
      })}
    >
      <span
        className={square({
          display: "flex",
          rounded: "md",
          size: 10,
          mt: 1,
          color: "accent",
          bgColor: "background.muted",
        })}
      >
        <Navigation size={20} />
      </span>
      <p
        className={css({
          textStyle: "text",
          fontSize: "lg",
        })}
      >
        I am currently wokring as a freelance developer working on projects of
        local businesses.
      </p>
      <span
        className={square({
          rounded: "md",
          size: 10,
          mt: 1,
          color: "accent",
          bgColor: "background.muted",
        })}
      >
        <MapPin size={20} />
      </span>
      <p
        className={css({
          textStyle: "text",
          fontSize: "lg",
        })}
      >
        I am currently wokring as a freelance developer working on projects of
        local businesses.
      </p>
    </div>
  );
}
