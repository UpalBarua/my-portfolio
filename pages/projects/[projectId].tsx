import { getProjects } from '@/utils/getProjects';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';

export default function projectId({ filteredProject }) {
  console.log(filteredProject);

  return (
    <>
      {/* rc */}
      <ProjectCard {...filteredProject} />
    </>
  );
}

export const getStaticPaths = async () => {
  const projects = await getProjects();

  const paths = projects.map((project) => {
    return {
      params: {
        projectId: project.id + '',
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const projects = await getProjects();

  const filteredProject = projects.find(
    // rc
    ({ id }: { id: number }) => id == params.projectId
  );

  return {
    props: { filteredProject },
  };
};
