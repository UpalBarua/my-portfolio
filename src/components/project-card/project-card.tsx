import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/";
import { TechStack } from "../UI/tech-stack/tech-stack";

import { css } from "styled-system/css";

export function ProjectCard({
  id,
  title,
  description,
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
      <Image
        className={css({
          objectPosition: "center",
          objectFit: "cover",
          border: "1px solid",
          borderColor: "fg/5",
          roundedTopLeft: "2xl",
          roundedTopRight: "2xl",
          width: "full",
          mt: 12,
        })}
        src={images[0]}
        alt="project"
        width={800}
        height={500}
      />
    </Link>
  );
}
