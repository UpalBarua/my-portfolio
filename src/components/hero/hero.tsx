import { ExternalLink, ScrollText, Twitter } from "lucide-react";
import Image from "next/image";

import { css } from "styled-system/css";
import { circle, grid, gridItem, hstack } from "styled-system/patterns";

export function Hero() {
  return (
    <section
      className={grid({
        columns: 12,
        gap: 4,
      })}
    >
      <div
        className={gridItem({
          colStart: 1,
          colEnd: 9,
          bg: "dark.darker",
          p: "10",
          shadow: "sm",
          border: "2px solid",
          borderColor: "fg/10",
          rounded: "2xl",
          roundedTopRight: "3rem",
          roundedBottomLeft: "3rem",
        })}
      >
        <div
          className={hstack({
            justify: "space-between",
            alignItems: "start",
            pb: 8,
          })}
        >
          <div
            className={hstack({
              gap: "5",
            })}
          >
            <Image
              className={circle({
                border: "2px solid",
                borderColor: "fg",
                bg: "accent/20",
                overflow: "hidden",
                size: "3.5rem",
              })}
              src="/images/avatar.svg"
              alt="avatar"
              height="100"
              width="100"
            />
            <div>
              <h4
                className={css({
                  fontSize: "xl",
                  fontWeight: "medium",
                })}
              >
                Hello, I'm Upal.
              </h4>
              <span
                className={css({
                  color: "fg/60",
                })}
              >
                Full-stack developer
              </span>
            </div>
          </div>
          <div
            className={hstack({
              gap: "8",
            })}
          >
            {Array(3)
              .fill("")
              .map((_, i) => (
                <a key={i} target="_blank">
                  <Twitter size={28} />
                </a>
              ))}
          </div>
        </div>
        <h1
          className={css({
            fontSize: "5xl",
            fontWeight: "medium",
            textTransform: "capitalize",
            lineHeight: "snug",
            letterSpacing: "tight",
            pb: 6,
          })}
        >
          I craft intuitive and dynamic web experiences with an eye for design
          and a passion for coding ✨
        </h1>
        <p
          className={css({
            fontSize: "lg",
            lineHeight: "relaxed",
            color: "fg/60",
            textWrap: "pretty",
            maxW: "40rem",
          })}
        >
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex in Lorem sunt
          duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur
          duis sunt velit enim. Voluptate laboris sint.
        </p>
      </div>
      <div
        className={gridItem({
          colStart: 9,
          colEnd: -1,
          display: "grid",
          gridTemplateRows: "auto max-content",
          gap: 4,
        })}
      >
        <div
          className={css({
            bg: "dark.darker",
            p: "8",
            shadow: "sm",
            border: "2px solid",
            borderColor: "fg/10",
            pos: "relative",
            overflow: "hidden",
            rounded: "2xl",
            roundedTopLeft: "3rem",
          })}
        >
          <div
            className={hstack({
              justify: "space-between",
              pb: 2,
            })}
          >
            <h2
              className={css({
                fontSize: "3xl",
                fontWeight: "medium",
                textTransform: "capitalize",
                lineHeight: "snug",
                letterSpacing: "tight",
              })}
            >
              My Resume
            </h2>
            <div
              className={circle({
                bg: "fg/15",
                size: "12",
              })}
            >
              <ExternalLink />
            </div>
          </div>
          <p
            className={css({
              fontSize: "lg",
              lineHeight: "relaxed",
              color: "fg/60",
              textWrap: "pretty",
              maxW: "40rem",
              pr: "16",
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod hic perspiciatis aliquid.
          </p>
          <ScrollText
            className={css({
              color: "yellow",
              height: "10rem",
              width: "10rem",
              pos: "absolute",
              right: 0,
              bottom: "-10%",
              rotate: "-20deg",
            })}
            strokeWidth={1}
          />
        </div>
        <div
          className={css({
            bg: "dark.darker",
            p: "8",
            shadow: "sm",
            border: "2px solid",
            borderColor: "fg/10",
            rounded: "2xl",
            roundedBottomRight: "3rem",
          })}
        >
          <span
            className={css({
              color: "blue",
              display: "block",
              pb: "4",
            })}
          >
            My Latest Blog Post
          </span>
          <h2
            className={css({
              fontSize: "2xl",
              fontWeight: "medium",
              textTransform: "capitalize",
              lineHeight: "snug",
              letterSpacing: "tight",
              pb: "4",
            })}
          >
            The Power of Paying Attention to Details in Software Development.
          </h2>
          <time
            className={css({
              color: "fg/60",
            })}
          >
            7 June 2024 / 5 min read
          </time>
        </div>
      </div>
    </section>
  );
}
