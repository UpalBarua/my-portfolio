"use client";

import { MotionDiv } from "@/components/motion-div";
import { navLinks } from "@/config";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiCodeBoxFill } from "react-icons/ri";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Header.module.scss";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header>
      <MotionDiv
        className={styles.Header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container">
          <Link className={styles.Logo} href="/">
            <RiCodeBoxFill className={styles.Icon} />
            <span>Upal Barua</span>
          </Link>
          <nav>
            <ul className={styles.NavMenu}>
              {navLinks.map(({ title, link }) => (
                <li key={link}>
                  <Link
                    className={styles.NavLink}
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
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu activeSection={activeSection} />
        </div>
      </MotionDiv>
    </header>
  );
};
