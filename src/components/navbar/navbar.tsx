import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { NavMenu } from "./nav-menu";

import styles from "./navbar.module.scss";

export function Navbar() {
  return (
    <MotionDiv initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <header className={styles.navbar}>
        <Link className={styles.logo} href="/">
          <span>~/upal-barua</span>
        </Link>
        <NavMenu />
      </header>
    </MotionDiv>
  );
}
