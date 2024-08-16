import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/";
import { TechStack } from "../UI/tech-stack/tech-stack";

import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";

export function ProjectCard({
  id,
  title,
  techStack,
  images,
}: Readonly<Project>) {
  return (
    <Link
      className={css({
        border: "2px solid",
        borderColor: "fg/10",
        rounded: "2xl",
        p: "10",
        pb: 0,
        bg: "dark.darker",
        shadow: "sm",
        overflow: "hidden",
      })}
      href={`projects/${id}`}
    >
      <h3
        className={css({
          display: "block",
          pb: "4",
          fontSize: "lg",
        })}
      >
        {title}
      </h3>
      <p
        className={css({
          pb: 6,
          letterSpacing: "tight",
          textTransform: "capitalize",
          fontSize: "3xl",
          fontWeight: "medium",
          lineHeight: "snug",
        })}
      >
        Lorem ipsum dolor sit amet, qui minim labore adipisicing.
      </p>
      <TechStack techStack={techStack} />
      <div
        className={grid({
          rotate: "-6deg",
          scale: "1.25",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          pt: 14,
          columns: 2,
          "&>*:nth-of-type(2),&>*:nth-of-type(4)": {
            translate: "0 1.5rem",
          },
        })}
      >
        {Array(4)
          .fill("")
          .map((_, i) => (
            <Image
              className={css({
                aspectRatio: "wide",
                objectPosition: "center",
                objectFit: "cover",
                border: "1px solid",
                borderColor: "fg/5",
                rounded: "xl",
              })}
              key={i}
              src={images[i]}
              alt="project"
              width={800}
              height={500}
            />
          ))}
      </div>
    </Link>
  );
}
