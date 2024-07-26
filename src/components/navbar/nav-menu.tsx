"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";

import { navLinks } from "@/config";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

import styles from "./navbar.module.scss";

export function NavMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Fragment>
      <button
        className={styles.toggle}
        aria-label="Nav Toggle"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? <X /> : <Menu />}
      </button>
      <nav className={styles.navMenu} data-open={isNavOpen}>
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
