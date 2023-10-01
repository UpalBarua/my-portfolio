import type { Project } from '@/types/project';
import Image from 'next/image';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import { Button } from '../UI/Button/Button';
import { TechStack } from '../UI/TechStack/TechStack';
import styles from './ProjectCard.module.scss';
import Link from 'next/link';

export const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  links,
}: Project) => {
  return (
    <Link
      className={styles.ProjectCard}
      href={`projects/${id}`}
      style={{ backgroundImage: `url("/images/projects/${id}-00.png")` }}>
      <div className={styles.Body}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>
          {description.short.length > 130
            ? description.short.slice(0, 130) + '...'
            : description.short}
        </p>
        <TechStack techStack={techStack} />
      </div>
    </Link>
  );
};
