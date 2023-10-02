import type { Project } from '@/types/project';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Button } from '../UI/Button/Button';
import { Title } from '../UI/Title/Title';
import styles from './LatestProjects.module.scss';

type LatestProjectsProps = {
  projects: Project[];
};

export const LatestProjects = ({ projects }: LatestProjectsProps) => {
  return (
    <section className={styles.LatestProjects}>
      <Title>Latest Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <Button variant="secondary" href="/projects" asLink>
        Find More
      </Button>
    </section>
  );
};
