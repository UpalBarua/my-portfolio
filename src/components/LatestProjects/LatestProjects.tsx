import { projects } from '@/data/data';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Button } from '../UI/Button/Button';
import { Title } from '../UI/Title/Title';
import styles from './LatestProjects.module.scss';

export const LatestProjects = () => {
  return (
    <section className={styles.LatestProjects} id="projects">
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
