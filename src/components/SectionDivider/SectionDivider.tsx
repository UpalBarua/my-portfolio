import styles from "./SectionDivider.module.scss";
import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      className={styles.SectionDivider}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
