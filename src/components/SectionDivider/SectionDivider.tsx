import styles from "./SectionDivider.module.scss";
import { MotionDiv } from "@/components/motion-div";

export function SectionDivider() {
  return (
    <MotionDiv
      className={styles.SectionDivider}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
