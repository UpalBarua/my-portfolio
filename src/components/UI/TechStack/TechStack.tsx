import { Project } from "@/types";
import styles from "./TechStack.module.scss";

type TechStackProps = {
  techStack: Project["techStack"];
};

export const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div className={styles.TechStack}>
      {techStack.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </div>
  );
};
