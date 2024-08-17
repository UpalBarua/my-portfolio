import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { css } from "styled-system/css";
import { circle, grid, gridItem, hstack } from "styled-system/patterns";

const socialLinks = [
  {
    icon: Github,
    href: "github.com",
  },
  {
    icon: Linkedin,
    href: "linkedin.com",
  },
  {
    icon: Mail,
    href: "upalbarua52@gmail.com",
  },
  {
    icon: Phone,
    href: "01782734",
  },
] as const;

export function Intro() {
  return (
    <div
      className={gridItem({
        layerStyle: "container",
        gridColumn: {
          md: "1/-1",
          lg: "1/2",
        },
        gridRow: {
          lg: "1/3",
        },
        roundedTopRight: "3rem",
        roundedBottomLeft: "3rem",
      })}
    >
      <div
        className={grid({
          columnGap: {
            base: 6,
            md: 4,
          },
          rowGap: 2,
          alignItems: "center",
          gridTemplateColumns: {
            base: "max-content auto",
            md: "max-content auto max-content",
          },
          pb: 8,
        })}
      >
        <Image
          className={circle({
            gridRow: {
              base: "1/3",
              md: 1,
            },
            border: "2px solid {colors.foreground.secondary}",
            size: {
              base: "7.5rem",
              md: "3.75rem",
            },
            bg: "background.muted",
            overflow: "hidden",
          })}
          src="/images/avatar.svg"
          alt="avatar"
          quality={95}
          width="150"
          height="150"
        />
        <div>
          <h2
            className={css({
              fontSize: "xl",
              fontWeight: "medium",
            })}
          >
            Hello, I'm Upal.
          </h2>
          <span
            className={css({
              color: "foreground.secondary",
            })}
          >
            Frontend developer
          </span>
        </div>
        <div
          className={hstack({
            gap: {
              base: 4,
              md: 6,
            },
            alignSelf: "start",
            gridColumn: {
              base: "2/3",
              md: "3/4",
            },
          })}
        >
          {socialLinks.map(({ icon: Icon, href }) => (
            <a
              className={css({
                transition: "opacity 300ms ease",
                "&:hover,&:focus-visible": {
                  opacity: 0.6,
                },
              })}
              key={href}
              href={href}
              target="_blank"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>
      <h1
        className={css({
          textStyle: "headline",
          pb: 6,
          fontSize: {
            base: "3xl",
            md: "4xl",
            lg: "5xl",
          },
        })}
      >
        I craft intuitive and dynamic web experiences with an eye for design and
        a passion for coding ✨
      </h1>
      <p
        className={css({
          textStyle: "text",
          maxW: "60ch",
          color: "foreground.secondary",
          fontSize: "lg",
        })}
      >
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex in Lorem sunt
        duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
        sunt velit enim. Voluptate laboris sint.
      </p>
    </div>
  );
}
