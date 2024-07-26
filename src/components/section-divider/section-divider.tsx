import { MotionDiv } from "@/components/motion-div";

import styles from "./section-divider.module.scss";

export function SectionDivider() {
  return (
    <MotionDiv
      className={styles.divider}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
