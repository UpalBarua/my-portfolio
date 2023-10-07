import { projects } from '@/data/data';
import useSectionInView from '@/hooks/useSectionInView';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Title } from '../UI/Title/Title';
import styles from './MyProjects.module.scss';

export const MyProjects = () => {
  const { ref } = useSectionInView('Projects', 0.2);

  return (
    <section className={styles.MyProjects} id="projects" ref={ref}>
      <Title>Latest Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {/* <Button variant="secondary" href="/projects" asLink>
        Find More
      </Button> */}
    </section>
  );
};
