import Image from "next/image";

import { contactLinks } from "@/config";
import { css } from "styled-system/css";
import { circle, grid, gridItem, hstack } from "styled-system/patterns";

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
        roundedTopRight: { md: "3rem" },
        roundedBottomLeft: { md: "3rem" },
      })}
    >
      <div
        className={grid({
          rowGap: 2,
          columnGap: {
            base: 6,
            md: 4,
          },
          alignItems: "center",
          gridTemplateColumns: {
            base: "max-content auto",
            md: "max-content auto max-content",
          },
          pb: 10,
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
              md: "3.675rem",
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
            Front-end developer
          </span>
        </div>
        <div
          className={hstack({
            gap: {
              base: 1,
            },
            alignSelf: "start",
            gridColumn: {
              base: "2/3",
              md: "3/4",
            },
          })}
        >
          {contactLinks.map(({ icon: Icon, href }) => (
            <a
              className={circle({
                size: 12,
                transition: "background-color 300ms ease",
                "&:hover,&:focus-visible": {
                  bgColor: "background.muted",
                },
              })}
              key={href}
              href={href}
              target="_blank"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      <h1
        className={css({
          textStyle: "headline",
          pb: 8,
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
        })}
      >
        I’m all about turning ideas into fun, interactive web experiences that
        really stand out. With a mix of creativity, design, and code, I craft
        sites that aren’t just functional but genuinely enjoyable to use. Let’s
        team up and create something amazing together!
      </p>
    </div>
  );
}
