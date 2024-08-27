import { MapPin, Navigation } from "lucide-react";
import { css } from "styled-system/css";
import { grid, circle } from "styled-system/patterns";

export function CurrentPosition() {
  return (
    <div
      className={grid({
        layerStyle: "container",
        rowGap: 8,
        columnGap: 4,
        gridTemplateColumns: "max-content auto",
        roundedBottomRight: { md: "3rem" },
        p: {
          base: 6,
          md: 8,
        },
      })}
    >
      <span
        className={circle({
          display: "flex",
          size: 10,
          mt: 1,
          color: "accent",
          bgColor: "background.muted",
          overflow: "hidden",
        })}
      >
        <Navigation size={20} strokeWidth={1} />
      </span>
      <p
        className={css({
          textStyle: "text",
          fontSize: "lg",
        })}
      >
        Looking for a fresher job or internship to gain professional experience
        and grow with a like-minded team.
      </p>
      <span
        className={circle({
          rounded: "full",
          size: 10,
          mt: 1,
          color: "accent",
          bgColor: "background.muted",
          overflow: "hidden",
        })}
      >
        <MapPin size={20} strokeWidth={1} />
      </span>
      <p
        className={css({
          textStyle: "text",
          fontSize: "lg",
        })}
      >
        Currently working as an indie developer, building websites and web apps
        for small to medium businesses.
      </p>
    </div>
  );
}
