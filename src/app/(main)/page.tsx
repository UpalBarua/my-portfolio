import { AboutMe } from "@/components/about-me/about-me";
import { ContactMe } from "@/components/contact-me/contact-me";
import { CurrentPosition } from "@/components/current-position";
import { Intro } from "@/components/intro";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { RecentProjects } from "@/components/recent-projects/recent-projects";
import { ResumeLink } from "@/components/resume-link";
import { Skills } from "@/components/skills/skills";
import { grid, vstack } from "styled-system/patterns";

export default function HomePage() {
  return (
    <main>
      <section
        className={grid({
          gap: 4,
          gridTemplateColumns: {
            base: "auto",
            md: "repeat(2, 1fr)",
            lg: "2fr 1fr",
          },
          gridTemplateRows: {
            xl: "max-content auto",
          },
          py: 20,
        })}
      >
        <Intro />
        <ResumeLink />
        <CurrentPosition />
      </section>
      <RecentProjects />
      <Skills />
      <section
        className={grid({
          gap: 4,
          gridTemplateColumns: {
            base: "auto",
            md: "repeat(2, 1fr)",
            xl: "60ch auto",
          },
          pb: 20,
        })}
      >
        <AboutMe />
        <ContactMe />
      </section>
      <LatestBlogPosts />
    </main>
  );
}
