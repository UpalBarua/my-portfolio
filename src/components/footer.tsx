import Link from "next/link";

import { css } from "styled-system/css";
import { circle, hstack, stack, vstack } from "styled-system/patterns";
import { contactLinks, navLinks } from "@/config";

export function Footer() {
  return (
    <footer
      className={stack({
        layerStyle: "container",
        zIndex: 10,
        gap: 8,
        direction: {
          base: "column",
          sm: "row",
        },
        justify: "space-between",
        w: "full",
        my: 4,
        p: 6,
      })}
    >
      <p
        className={css({
          textStyle: "text",
          maxW: "40ch",
          color: "foreground.secondary",
          fontSize: "xl",
          fontStyle: "italic",
        })}
      >
        "Just as a solid rock is not shaken by the storm, even so the wise are
        not affected by praise or blame." <br /> ~ The Buddha
      </p>
      <div
        className={vstack({
          gap: 2,
          alignItems: "start",
        })}
      >
        <p>&copy; 2024 Upal Barua. All rights reserved</p>
        <div
          className={hstack({
            gap: 0,
            alignSelf: "start",
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
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
