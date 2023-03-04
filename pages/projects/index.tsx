import { MyProjects } from '@/components/MyProjects/MyProjects';
import { getProjects } from '@/utils/getProjects';

export default function index({ projects }: { projects: IProject[] }) {
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
