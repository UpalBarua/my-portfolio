<<<<<<< HEAD
import type { Project } from "@/types/types";
import Link from "next/link";
import { TechStack } from "../UI/TechStack/TechStack";
import styles from "./ProjectCard.module.scss";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
=======
import type { Project } from "@/types/";
import { motion } from "framer-motion";
import Link from "next/link";
import { TechStack } from "../UI/TechStack/TechStack";
import styles from "./ProjectCard.module.scss";
>>>>>>> development

export const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  images,
}: Project) => {
<<<<<<< HEAD
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <m.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
=======
  return (
    <motion.div>
>>>>>>> development
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
    </m.div>
  );
};
