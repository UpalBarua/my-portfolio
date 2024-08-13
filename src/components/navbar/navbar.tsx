import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { NavMenu } from "./nav-menu";

import { css } from "styled-system/css";
import { container, hstack } from "styled-system/patterns";

export function Navbar() {
  return (
    <MotionDiv
      className={container({
        zIndex: 10,
        pos: "fixed",
        top: 0,
        left: "-50%",
        translate: "50%",
        w: "full",
      })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <header
        className={hstack({
          justify: "space-between",
          border: "1px solid",
          borderColor: "fg/15",
          rounded: "xl",
          w: "full",
          minH: "3.75rem",
          my: 3,
          py: 3,
          px: 4,
          bg: "dark.darker/80",
          backdropFilter: "blur(0.75rem)",
        })}
        // style={{ backdropFilter: "blur(10rem)" }}
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
