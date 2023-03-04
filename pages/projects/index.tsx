import { getProjects } from '@/utils/getProjects';
import { Title } from '@/components/UI/Title/Title';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from '../../components/LatestProjects/LatestProjects.module.scss';

export default function index({ projects }) {
  return (
    <>
      <Title>Latest Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
