import { ExternalLink, ScrollText, Twitter } from "lucide-react";
import Image from "next/image";

import { css } from "styled-system/css";
import { circle, grid, gridItem, hstack } from "styled-system/patterns";

export function Hero() {
  return (
    <section
      className={grid({
        gap: 4,
        pt: 20,
        columns: 12,
      })}
    >
      <div
        className={gridItem({
          colStart: 1,
          colEnd: 9,
          border: "2px solid",
          borderColor: "fg/10",
          rounded: "2xl",
          roundedTopRight: "3rem",
          roundedBottomLeft: "3rem",
          p: "10",
          bg: "dark.darker",
          shadow: "sm",
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
                size: "3.5rem",
                bg: "accent/20",
                overflow: "hidden",
              })}
              src="/images/avatar.svg"
              alt="avatar"
              width="100"
              height="100"
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
            pb: 6,
            letterSpacing: "tight",
            textTransform: "capitalize",
            fontSize: "5xl",
            fontWeight: "medium",
            lineHeight: "snug",
          })}
        >
          I craft intuitive and dynamic web experiences with an eye for design
          and a passion for coding ✨
        </h1>
        <p
          className={css({
            maxW: "40rem",
            color: "fg/60",
            textWrap: "pretty",
            fontSize: "lg",
            lineHeight: "relaxed",
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
          gap: 4,
          gridTemplateRows: "auto max-content",
        })}
      >
        <div
          className={css({
            pos: "relative",
            border: "2px solid",
            borderColor: "fg/10",
            rounded: "2xl",
            roundedTopLeft: "3rem",
            p: "8",
            bg: "dark.darker",
            shadow: "sm",
            overflow: "hidden",
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
                letterSpacing: "tight",
                textTransform: "capitalize",
                fontSize: "3xl",
                fontWeight: "medium",
                lineHeight: "snug",
              })}
            >
              My Resume
            </h2>
            <div
              className={circle({
                size: "12",
                bg: "fg/15",
              })}
            >
              <ExternalLink />
            </div>
          </div>
          <p
            className={css({
              maxW: "40rem",
              pr: "16",
              color: "fg/60",
              textWrap: "pretty",
              fontSize: "lg",
              lineHeight: "relaxed",
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quod hic perspiciatis aliquid.
          </p>
          <ScrollText
            className={css({
              pos: "absolute",
              right: 0,
              bottom: "-10%",
              rotate: "-20deg",
              width: "10rem",
              height: "10rem",
              color: "yellow",
            })}
            strokeWidth={1}
          />
        </div>
        <div
          className={css({
            border: "2px solid",
            borderColor: "fg/10",
            rounded: "2xl",
            roundedBottomRight: "3rem",
            p: "8",
            bg: "dark.darker",
            shadow: "sm",
          })}
        >
          <span
            className={css({
              display: "block",
              pb: "4",
              color: "blue",
            })}
          >
            My Latest Blog Post
          </span>
          <h2
            className={css({
              pb: "4",
              letterSpacing: "tight",
              textTransform: "capitalize",
              fontSize: "2xl",
              fontWeight: "medium",
              lineHeight: "snug",
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
