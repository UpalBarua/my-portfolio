import { ProjectCard } from "@/components/project-card/project-card";
import { Title } from "@/components/UI/Title/Title";
import { SectionInView } from "@/components/section-in-view";
import { getRecentProjects } from "@/lib/services";

import styles from "./recent-projects.module.scss";

export async function RecentProjects() {
  const projects = await getRecentProjects();

  return (
    <SectionInView
      className={styles.projects}
      id="projects"
      sectionName="Projects"
      threshold={0.2}
    >
      <Title>Recent Projects</Title>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionInView>
  );
}
