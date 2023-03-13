import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import styles from './LatestProjects.module.scss';

export const LatestProjects = ({ projects }: { projects: IProject[] }) => {
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
