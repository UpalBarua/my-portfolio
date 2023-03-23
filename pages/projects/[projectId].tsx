import { getProjects } from '@/utils/getProjects';
import { ProjectDetails } from '@/components/ProjectDetails/ProjectDetails';

export default function projectId({
  filteredProject,
}: {
  filteredProject: IProject;
}) {
  return <ProjectDetails {...filteredProject} />;
}

export const getStaticPaths = async () => {
  const projects = await getProjects();

  const paths = projects.map((project: IProject) => {
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

export const getStaticProps = async ({
  params,
}: {
  params: { projectId: string | number };
}) => {
  const projects = await getProjects();

  const filteredProject = projects.find(
    ({ id }: { id: number }) => id == params.projectId
  );

  return {
    props: { filteredProject },
  };
};
