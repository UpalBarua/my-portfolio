import { ProjectDetails } from "@/components/ProjectDetails/ProjectDetails";
import { projects } from "@/config";

type Params = {
  params: {
    projectId: string;
  };
};

export default function ProjectPage({ params: { projectId } }: Params) {
  const filteredProject = projects.find(({ id }) => id == projectId);
  return <ProjectDetails {...filteredProject} />;
}
