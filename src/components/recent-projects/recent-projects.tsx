import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card/project-card";
import { SectionInView } from "@/components/section-in-view";
import { projects } from "@/config/projects";

import { css } from "styled-system/css";
import { circle, grid, hstack } from "styled-system/patterns";

export function RecentProjects() {
  return (
    <SectionInView
      className={css({ pb: 20 })}
      id="projects"
      sectionName="Projects"
      threshold={0.2}
    >
      <div
        className={hstack({
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pb: 10,
        })}
      >
        <h2
          className={css({
            textStyle: "headline",
          })}
        >
          Recent Projects
        </h2>
        <Link
          className={hstack({
            border: "2px solid {colors.border}",
            rounded: "full",
            ps: 6,
            fontWeight: "medium",
            bgColor: "background.muted",
          })}
          href="/projects"
        >
          <span>View All</span>
          <div
            className={circle({
              size: 10,
              m: 1,
              color: "foreground",
              bgColor: "background",
            })}
          >
            <ExternalLink size={18} />
          </div>
        </Link>
      </div>
      <div
        className={grid({
          gap: 4,
          mb: 20,
          columns: {
            base: 1,
            lg: 2,
          },
          justifyItems: "start",
          "&>*:last-child": {
            roundedBottomRight: "3rem",
          },
          "&>*:nth-child(3)": {
            roundedBottomLeft: "3rem",
          },
        })}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </SectionInView>
  );
}
