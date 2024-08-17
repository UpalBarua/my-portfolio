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
        w: "full",
      })}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <header
        className={hstack({
          layerStyle: "container",
          justify: "space-between",
          alignContent: "center",
          rounded: "2xl",
          w: "full",
          minH: "3.75rem",
          my: 3,
          py: 3,
          px: 4,
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
