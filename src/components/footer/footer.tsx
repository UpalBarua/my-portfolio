import Link from "next/link";

import { MotionDiv } from "@/components/motion-div";
import { footerLinks } from "@/config";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <MotionDiv
        className={styles.Footer}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className={styles.Links}>
          {footerLinks.map(({ href, label, target }) => (
            <Link key={href} href={href} target={target}>
              {label}
            </Link>
          ))}
        </div>
        <p className={styles.Copyright}>
          &copy; 2024 Upal Barua. All rights reserved
        </p>
      </MotionDiv>
    </footer>
  );
};
