import Image from "next/image";
import Link from "next/link";

import { TechStack } from "@/components/tech-stack";
import type { Project } from "@/types/";

import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";

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
        p: 8,
        pb: 0,
        overflow: "hidden",
      })}
      href={`projects/${name}`}
    >
      <div
        className={grid({
          gap: 2,
          gridTemplateColumns: "auto repeat(2, max-content)",
          pb: 6,
        })}
      >
        <h3
          className={css({
            fontSize: "lg",
          })}
        >
          {name}
        </h3>
        {/* <Link */}
        {/*   className={hstack({ */}
        {/*     gap: 1.5, */}
        {/*     rounded: "100vmin", */}
        {/*     py: 1, */}
        {/*     px: 3, */}
        {/*     transition: "background-color 300ms", */}
        {/*     _focusVisible: { */}
        {/*       bgColor: "background.muted", */}
        {/*     }, */}
        {/*     _hover: { */}
        {/*       bgColor: "background.muted", */}
        {/*     }, */}
        {/*   })} */}
        {/*   href={git} */}
        {/* > */}
        {/*   <IconBrandGithub */}
        {/*     className={css({ */}
        {/*       w: 4, */}
        {/*       h: 4, */}
        {/*     })} */}
        {/*   /> */}
        {/*   <span>GitHub</span> */}
        {/* </Link> */}
        {/* <Link */}
        {/*   className={hstack({ */}
        {/*     gap: 1.5, */}
        {/*     rounded: "100vmin", */}
        {/*     py: 1, */}
        {/*     px: 3, */}
        {/*     transition: "background-color 300ms", */}
        {/*     _focusVisible: { */}
        {/*       bgColor: "background.muted", */}
        {/*     }, */}
        {/*     _hover: { */}
        {/*       bgColor: "background.muted", */}
        {/*     }, */}
        {/*   })} */}
        {/*   href={live} */}
        {/* > */}
        {/*   <IconAccessPoint */}
        {/*     className={css({ */}
        {/*       w: 4, */}
        {/*       h: 4, */}
        {/*     })} */}
        {/*   /> */}
        {/*   <span>Live</span> */}
        {/* </Link> */}
      </div>
      <p
        className={css({
          textStyle: "title",
          pb: 4,
          fontWeight: "medium",
          lineHeight: "relaxed",
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
          pt: 16,
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
