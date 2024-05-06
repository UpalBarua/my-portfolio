import type { Project } from "@/types/";
import { motion } from "framer-motion";
import Link from "next/link";
import { TechStack } from "../UI/TechStack/TechStack";
import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  images,
}: Project) => {
  return (
    <motion.div>
      <Link
        className={styles.ProjectCard}
        href={`projects/${id}`}
        style={{ backgroundImage: `url("${images[0]}")` }}
      >
        <div className={styles.Body}>
          <h3 className={styles.Title}>{title}</h3>
          <p className={styles.Description}>
            {description.short.length > 150
              ? description.short.slice(0, 150) + "..."
              : description.short}
          </p>
          <TechStack techStack={techStack} />
        </div>
      </Link>
    </motion.div>
  );
};
