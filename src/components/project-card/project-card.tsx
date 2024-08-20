import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/";
import { TechStack } from "../UI/tech-stack/tech-stack";

import { Github, Radio } from "lucide-react";
import { css } from "styled-system/css";
import { grid, hstack } from "styled-system/patterns";

export function ProjectCard({
  name,
  title,
  techStack,
  images,
  links: { git, live },
}: Readonly<Project>) {
  return (
    <Link
      className={css({
        layerStyle: "container",
        pb: 0,
        overflow: "hidden",
      })}
      href={`projects/${name}`}
    >
      <div
        className={grid({
          gap: 6,
          gridTemplateColumns: "auto repeat(2, max-content)",
          pb: 8,
        })}
      >
        <h3
          className={css({
            fontSize: "lg",
          })}
        >
          {name}
        </h3>
        <a
          href={git}
          className={hstack({
            gap: "1.5",
            fontSize: "sm",
            _focusVisible: {
              outline: 0,
              textDecoration: "underline",
              textUnderlineOffset: 2,
            },
            _hover: {
              textDecoration: "underline",
              textUnderlineOffset: 2,
            },
          })}
        >
          <Github
            className={css({
              w: 4,
              h: 4,
            })}
          />
          <span>GitHub</span>
        </a>
        <a
          href={live}
          className={hstack({
            gap: "1.5",
            fontSize: "sm",
            _focusVisible: {
              outline: 0,
              textDecoration: "underline",
              textUnderlineOffset: 2,
            },
            _hover: {
              textDecoration: "underline",
              textUnderlineOffset: 2,
            },
          })}
        >
          <Radio
            className={css({
              w: 4,
              h: 4,
            })}
          />
          <span>Live</span>
        </a>
      </div>
      <p
        className={css({
          textStyle: "title",
          pb: 6,
        })}
      >
        {title}
      </p>
      <TechStack techStack={techStack} />
      <div
        className={grid({
          rotate: "-6deg",
          scale: "1.25",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          pt: 20,
          columns: 2,
          "&>*:nth-of-type(2),&>*:nth-of-type(4)": {
            translate: "0 1.675rem",
          },
        })}
      >
        {images.slice(0, 4).map((image) => (
          <Image
            className={css({
              aspectRatio: "wide",
              objectPosition: "center",
              objectFit: "cover",
              border: "1px solid",
              borderColor: "fg/5",
              rounded: "xl",
            })}
            key={image}
            src={image}
            alt="project"
            width={800}
            height={500}
          />
        ))}
      </div>
    </Link>
  );
}
