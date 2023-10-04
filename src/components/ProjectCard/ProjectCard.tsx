import type { Project } from '@/types/types';
import Link from 'next/link';
import { TechStack } from '../UI/TechStack/TechStack';
import styles from './ProjectCard.module.scss';

export const ProjectCard = ({ id, title, description, techStack }: Project) => {
  return (
    <Link
      className={styles.ProjectCard}
      href={`projects/${id}`}
      style={{ backgroundImage: `url("/images/projects/${id}-00.png")` }}>
      <div className={styles.Body}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>
          {description.short.length > 120
            ? description.short.slice(0, 120) + '...'
            : description.short}
        </p>
        <TechStack techStack={techStack} />
      </div>
    </Link>
  );
};
