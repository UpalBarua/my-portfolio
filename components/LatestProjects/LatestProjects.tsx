import { Title } from '../UI/Title/Title';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Button } from '../UI/Button/Button';
import styles from './LatestProjects.module.scss';

export const LatestProjects = ({ projects }) => {
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
