"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { MotionDiv } from "@/components/motion-div";
import { NavMenu } from "./nav-menu";

import { css } from "styled-system/css";
import { container, hstack } from "styled-system/patterns";

export function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 50) {
      setShow(false);
    } else if (currentScrollY < lastScrollY - 50) {
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <MotionDiv
      className={container({
        zIndex: 10,
        pos: "fixed",
        // translate: show ? "0" : "0 -100%",
        w: "full",
        bgColor:
          window.scrollY > 100 ? "background.secondary/80" : "background",
        backdropFilter: "blur(0.675rem) saturate(200%)",
      })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <header
        className={hstack({
          justify: "space-between",
          alignContent: "center",
          w: "full",
          minH: "3.75rem",
          px: 2,
        })}
      >
        <Link
          className={css({
            color: "accent",
            fontSize: "xl",
            fontWeight: "medium",
          })}
          href="/"
        >
          ~/upal-barua
        </Link>
        <NavMenu />
      </header>
    </MotionDiv>
  );
}
