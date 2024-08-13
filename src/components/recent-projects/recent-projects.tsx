import { SectionInView } from "@/components/section-in-view";
import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";
import { ProjectCard } from "@/components/project-card/project-card";

const PROJECT = {
  id: "thrivenvision",
  images: [
    "/images/projects/thrivenvision-00.png",
    "/images/projects/thrivenvision-01.png",
    "/images/projects/thrivenvision-02.png",
    "/images/projects/thrivenvision-03.png",
    "/images/projects/thrivenvision-04.png",
    "/images/projects/thrivenvision-05.png",
    "/images/projects/thrivenvision-06.png",
    "/images/projects/thrivenvision-07.png",
  ],
  title: "Thrivenvision",
  description: {
    short:
      "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
    long: "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
    features: [
      "Built using the latest Next.js app directory structure",
      "Utilized Firestore as the database and Firebase Storage for file storage",
      "Styled with Tailwind CSS and Next UI components",
      "Incorporated scroll animations using Framer Motion",
      "Utilized libraries like React Hook Form and Zod for form handling and validation",
    ],
  },
  techStack: [
    "Nextjs",
    "TypeScript",
    "TailwindCSS",
    "Firebase",
    "Framer Motion",
  ],
  links: {
    live: "https://www.thrivenvision.studio/",
    git: "https://github.com/upalbarua/thrivenvision",
  },
};

export async function RecentProjects() {
  return (
    <SectionInView id="projects" sectionName="Projects" threshold={0.2}>
      <div
        className={css({
          bg: "dark.darker",
          p: "10",
          shadow: "sm",
          border: "2px solid",
          borderColor: "fg/10",
          rounded: "2xl",
          roundedTopLeft: "3rem",
          roundedTopRight: "3rem",
          h: "max-content",
          my: 4,
        })}
      >
        <h2
          className={css({
            fontSize: "3xl",
            fontWeight: "medium",
            textTransform: "capitalize",
            lineHeight: "snug",
            letterSpacing: "tight",
            pb: 2,
          })}
        >
          Recent Projects
        </h2>
        <p
          className={css({
            fontSize: "xl",
            lineHeight: "relaxed",
            color: "fg/60",
            textWrap: "pretty",
            maxW: "40rem",
            pr: "16",
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quod hic perspiciatis aliquid.
        </p>
      </div>
      <div
        className={grid({
          columns: 2,
          justifyItems: "start",
          alignItems: "start",
          gap: 4,
          mb: 20,
          "&>*:last-child": {
            roundedBottomRight: "3rem",
          },
          "&>*:nth-child(3)": {
            roundedBottomLeft: "3rem",
          },
        })}
      >
        <ProjectCard {...PROJECT} />
        <ProjectCard {...PROJECT} />
        <ProjectCard {...PROJECT} />
        <ProjectCard {...PROJECT} />
      </div>
    </SectionInView>
  );
}
