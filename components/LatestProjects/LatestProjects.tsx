import { FC } from 'react';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import styles from './LatestProjects.module.scss';
import type { Project } from '@/types/project';

interface LatestProjectsProps {
  projects: Project[];
}

export const LatestProjects: FC<LatestProjectsProps> = ({ projects }) => {
  return (
    <section className={styles.LatestProjects}>
      <Title>Latest Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <Button type="secondary" as="link" href="/projects">
        Find More
      </Button>
    </section>
  );
};
