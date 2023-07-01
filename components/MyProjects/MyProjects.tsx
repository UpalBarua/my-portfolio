import { Title } from '../UI/Title/Title';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './MyProjects.module.scss';
import type { Project } from '@/types/project';
import { FC } from 'react';

interface MyProjectsProps {
  projects: Project[];
}

export const MyProjects: FC<MyProjectsProps> = ({ projects }) => {
  return (
    <section className={styles.MyProjects}>
      <Title>My Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
