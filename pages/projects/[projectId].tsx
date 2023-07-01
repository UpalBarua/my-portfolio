import { FC } from 'react';
import { getProjects } from '@/utils/getProjects';
import { ProjectDetails } from '@/components/ProjectDetails/ProjectDetails';
import type { Project } from '@/types/project';

interface ProjectProps {
  filteredProject: Project;
}

export const getStaticPaths = async () => {
  try {
    const projects = await getProjects();

    const paths = projects.map((project: Project) => {
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
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({
  params,
}: {
  params: { projectId: string | number };
}) => {
  try {
    const projects = await getProjects();

    const filteredProject = projects.find(
      ({ id }: { id: number }) => id == params.projectId
    );

    return {
      props: { filteredProject },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        filteredProject: {},
      },
    };
  }
};

const Project: FC<ProjectProps> = ({ filteredProject }) => {
  return <ProjectDetails {...filteredProject} />;
};

export default Project;
