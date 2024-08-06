import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { NavMenu } from "./nav-menu";

import { css } from "styled-system/css";
import { hstack } from "styled-system/patterns";

export function Navbar() {
  return (
    <MotionDiv initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <header
        className={hstack({
          justify: "space-between",
          pos: "relative",
          zIndex: 10,
          //   position: fixed;
          //   top: 0;
          //   left: 50%;
          //   transform: translateX(-50%);
          //   z-index: 9999;
          my: 3,
          py: 3,
          px: 4,
          rounded: "xl",
          border: "1px solid",
          borderColor: "fg/15",
          minH: "3.75rem",
          w: "full",
          bg: "dark.darker",
        })}
      >
        <Link
          className={css({
            fontSize: "xl",
            fontWeight: "medium",
            color: "accent",
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
