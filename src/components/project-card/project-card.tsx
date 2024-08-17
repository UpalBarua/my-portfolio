import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/";
import { TechStack } from "../UI/tech-stack/tech-stack";

import { blurredBg } from "@/recipes/blurred-bg";
import { Github, Radio } from "lucide-react";
import { css, cx } from "styled-system/css";
import { grid, hstack } from "styled-system/patterns";

export function ProjectCard({
  id,
  title,
  techStack,
  images,
}: Readonly<Project>) {
  return (
    <Link
      className={css({
        layerStyle: "container",
        pb: 0,
        overflow: "hidden",
      })}
      href={`projects/${id}`}
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
          {title}
        </h3>
        <a
          href="#"
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
          href="#"
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
          pt: 20,
          columns: 2,
          "&>*:nth-of-type(2),&>*:nth-of-type(4)": {
            translate: "0 1.675rem",
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
