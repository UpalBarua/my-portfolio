import Link from "next/link";
import Image from "next/image";

import { TechStack } from "../UI/tech-stack/tech-stack";
import type { Project } from "@/types/";

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
        bg: "dark.darker",
        p: "10",
        shadow: "sm",
        border: "2px solid",
        borderColor: "fg/10",
        rounded: "2xl",
        pb: 0,
      })}
      href={`projects/${id}`}
    >
      <h3
        className={css({
          fontSize: "lg",
          display: "block",
          pb: "4",
        })}
      >
        {title}
      </h3>
      <p
        className={css({
          fontSize: "3xl",
          fontWeight: "medium",
          textTransform: "capitalize",
          lineHeight: "snug",
          letterSpacing: "tight",
          pb: 6,
        })}
      >
        Lorem ipsum dolor sit amet, qui minim labore adipisicing.
      </p>
      <TechStack techStack={techStack} />
      <Image
        className={css({
          width: "full",
          mt: 12,
          objectFit: "cover",
          objectPosition: "center",
          roundedTopRight: "2xl",
          roundedTopLeft: "2xl",
          border: "1px solid",
          borderColor: "fg/5",
        })}
        src={images[0]}
        alt="project"
        height={500}
        width={800}
      />
    </Link>
  );
}
