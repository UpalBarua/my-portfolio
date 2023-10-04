import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Title } from '../UI/Title/Title';
import styles from './MyProjects.module.scss';
import { projects } from '@/data/data';

export const MyProjects = () => {
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
