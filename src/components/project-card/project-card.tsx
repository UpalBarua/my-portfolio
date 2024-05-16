import parse from "html-react-parser";
import Link from "next/link";

import { TechStack } from "@/components/UI/TechStack/TechStack";
import type { Project } from "@/types/";

import styles from "./project-card.module.scss";

export function ProjectCard({
  id,
  title,
  description,
  techStack,
  images,
}: Readonly<Project>) {
  return (
    <Link
      className={styles.card}
      href={`projects/${id}`}
      style={{ backgroundImage: `url("${images[0]}")` }}
    >
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {parse(description.slice(0, 160))}
        <TechStack techStack={techStack} />
      </div>
    </Link>
  );
}
