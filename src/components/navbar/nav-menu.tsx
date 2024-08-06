"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { navLinks } from "@/config";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { css } from "styled-system/css";
import { flex, hstack } from "styled-system/patterns";

export function NavMenu() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Fragment>
      <button
        aria-label="Nav Toggle"
        className={flex({
          justify: "center",
          alignItems: "center",
          hideFrom: "md",
        })}
      >
        <Menu />
      </button>
      <nav
        className={css({
          hideBelow: "md",
        })}
      >
        {navLinks.map(({ title, link }) => (
          <Link
            key={link}
            className={css({
              px: 4,
              py: 2,
              transition: "color 200ms ease",
              pos: "relative",
              _focusVisible: {
                color: "accent",
              },
              _hover: {
                color: "accent",
              },
              "&[data-active='true']": {
                color: "accent",
              },
            })}
            href={link}
            data-active={activeSection === title}
            onClick={() => {
              setActiveSection(title);
              setTimeOfLastClick(Date.now());
            }}
          >
            {title}
            {activeSection === title && (
              <motion.span
                className={css({
                  pos: "absolute",
                  inset: 0,
                  h: "full",
                  w: "full",
                  zIndex: -1,
                  bg: "accent/5",
                  rounded: "lg",
                  border: "1px solid",
                  borderColor: "accent/5",
                })}
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        ))}
      </nav>
    </Fragment>
  );
}
