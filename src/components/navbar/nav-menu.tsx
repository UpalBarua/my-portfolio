"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { navLinks } from "@/config";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

import styles from "./navbar.module.scss";

export function NavMenu() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Fragment>
      <button className={styles.toggle} aria-label="Nav Toggle">
        <Menu />
      </button>
      <nav className={styles.navMenu}>
        {navLinks.map(({ title, link }) => (
          <Link
            key={link}
            className={styles.navLink}
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
