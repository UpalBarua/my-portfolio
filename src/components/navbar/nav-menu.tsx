"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { navLinks } from "@/config";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

export function NavMenu() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Fragment>
      <button
        aria-label="Nav Toggle"
        className={flex({
          hideFrom: "md",
          justify: "center",
          alignItems: "center",
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
            className={css({
              pos: "relative",
              py: 2,
              px: 4,
              color: "foreground.secondary",
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
                  zIndex: -1,
                  pos: "absolute",
                  inset: 0,
                  border: "1px solid {colors.border}",
                  rounded: "lg",
                  bgColor: "background.muted/80",
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
