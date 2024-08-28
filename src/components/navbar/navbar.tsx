import { IconCode } from "@tabler/icons-react";
import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { NavMenu } from "@/components/navbar/nav-menu";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { css } from "styled-system/css";
import { container, hstack, square } from "styled-system/patterns";

export function Navbar() {
  return (
    <MotionDiv
      className={container({
        zIndex: 20,
        pos: "fixed",
        w: "full",
        bgColor: "background.secondary/75",
        backdropFilter: "blur(2rem) saturate(200%)",
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
        <Link className={hstack()} href="/">
          <IconCode
            className={square({
              size: "1.675rem",
              color: "accent",
            })}
          />
          <span
            className={css({
              fontSize: "xl",
              fontWeight: "medium",
            })}
          >
            Upal Barua
          </span>
        </Link>
        <NavMenu />
        <MobileNav />
      </header>
    </MotionDiv>
  );
}
