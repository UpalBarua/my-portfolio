import { MotionDiv } from "@/components/motion-div";
import Link from "next/link";
import { CodeXml } from "lucide-react";

import { NavMenu } from "./nav-menu";
import styles from "./navbar.module.scss";

export function Navbar() {
  return (
    <MotionDiv
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <header className="container">
        <Link className={styles.logo} href="/">
          <CodeXml className={styles.icon} />
          <span>Upal Barua</span>
        </Link>
        <NavMenu />
      </header>
    </MotionDiv>
  );
}
