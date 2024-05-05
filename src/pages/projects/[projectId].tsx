import { ProjectDetails } from "@/components/ProjectDetails/ProjectDetails";
import { projects } from "@/config";
import type { Project } from "@/types";

type ProjectId = (typeof projects)[number]["id"];

export const getStaticPaths = async () => {
  try {
    const paths = projects.map(({ id }) => {
      return {
        params: {
          projectId: id.toString(),
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
  params: { projectId },
}: {
  params: { projectId: ProjectId };
}) => {
  try {
    const filteredProject = projects.find(({ id }) => id == projectId);

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

const Project = ({
  filteredProject,
}: {
  filteredProject: (typeof projects)[number];
}) => {
  return <ProjectDetails {...filteredProject} />;
};

export default Project;
