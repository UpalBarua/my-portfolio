"use client";

import { IconMenu3, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "vaul";

import { navLinks } from "@/config";
import { css } from "styled-system/css";
import { circle, square, vstack } from "styled-system/patterns";

export function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Drawer.Root
      noBodyStyles
      open={isNavOpen}
      onOpenChange={setIsNavOpen}
      direction="top"
    >
      <Drawer.Trigger asChild>
        <button className={css({ hideFrom: "md" })}>
          <IconMenu3 className={square({ size: "1.675rem" })} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content
          className={css({
            layerStyle: "container",
            zIndex: 100,
            pos: "fixed",
            inset: 0,
            outline: 0,
            rounded: 0,
            h: "full",
          })}
        >
          <nav className={vstack({})}>
            {navLinks.map(({ title, link }) => (
              <Link
                className={css({
                  p: 2,
                  color: "foreground.secondary",
                  fontSize: "lg",
                  transition: "color 300ms ease",
                  _focusVisible: {
                    color: "foreground",
                  },
                  _hover: {
                    color: "foreground",
                  },
                  "&[data-active='true']": {
                    color: "foreground",
                  },
                })}
                key={link}
                href={link}
                onClick={() => setIsNavOpen(false)}
              >
                {title}
              </Link>
            ))}
            <button
              className={circle({
                size: "3rem",
                mt: 10,
                color: "background",
                bgColor: "foreground",
              })}
              onClick={() => setIsNavOpen(false)}
            >
              <IconX />
            </button>
          </nav>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
}
