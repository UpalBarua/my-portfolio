import { MyProjects } from '@/components/MyProjects/MyProjects';
import { getProjects } from '@/utils/getProjects';
import { Title } from '@/components/UI/Title/Title';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import styles from '../../components/LatestProjects/LatestProjects.module.scss';

export default function index({ projects }) {
  return <MyProjects projects={projects} />;
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
