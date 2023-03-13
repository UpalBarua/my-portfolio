import { Title } from '../UI/Title/Title';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './MyProjects.module.scss';

export const MyProjects = ({ projects }: { projects: IProject[] }) => {
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
