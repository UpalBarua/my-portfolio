import { footerLinks } from "@/config";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
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
        &copy; 2023 Upal Barua. All rights reserved
      </p>
    </motion.footer>
  );
};
