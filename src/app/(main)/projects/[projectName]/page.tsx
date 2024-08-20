import { TechStack } from "@/components/UI/tech-stack/tech-stack";
import Image from "next/image";

import { Github, Radio } from "lucide-react";
import { css } from "styled-system/css";
import { grid, hstack, vstack } from "styled-system/patterns";

import { PhotoView } from "@/components/photo-provider";
import { projects } from "@/config/projects";
import { notFound } from "next/navigation";

type ProjectDetailsProps = {
  params: { projectName: string };
};

export default async function ProjectDetails({
  params: { projectName },
}: ProjectDetailsProps) {
  console.log(projectName);
  const project = projects.find(
    ({ name }) => name === decodeURIComponent(projectName),
  );

  if (!project) {
    return notFound();
  }

  const {
    name,
    title,
    description,
    techStack,
    links: { git, live },
    images,
  } = project;

  return (
    <section
      className={grid({
        gap: 4,
        alignItems: "start",
        gridTemplateColumns: "repeat(2, 1fr)",
        py: 20,
      })}
    >
      <div
        className={css({
          layerStyle: "container",
        })}
      >
        <div
          className={grid({
            gap: 6,
            gridTemplateColumns: "auto repeat(2, max-content)",
            pb: 8,
          })}
        >
          <h2
            className={css({
              fontSize: "lg",
            })}
          >
            {name}
          </h2>
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
        <p
          className={css({
            textStyle: "text",
            pt: 8,
            color: "foreground.secondary",
          })}
        >
          {description}
        </p>
      </div>
      <div
        className={vstack({
          gap: 4,
          rounded: "2xl",
          maxH: "calc(100dvh + 2rem)",
          scrollbar: "hidden",
          overflowY: "scroll",
        })}
      >
        {images.map((image) => (
          <PhotoView key={image} src={`${image}`}>
            <Image
              className={css({
                border: "2px solid {colors.border}",
                rounded: "2xl",
                w: "full",
                filter: "brightness(0.9)",
                cursor: "pointer",
                _hover: {
                  filter: "brightness(1)",
                },
              })}
              src={`${image}`}
              alt={title}
              width={600}
              height={400}
            />
          </PhotoView>
        ))}
      </div>
    </section>
  );
}
