import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CurrentPosition } from "@/components/current-position";
import { Intro } from "@/components/intro";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { RecentProjects } from "@/components/recent-projects";
import { ResumeLink } from "@/components/resume-link";
import { Skills } from "@/components/skills";
import { grid, vstack } from "styled-system/patterns";

export default function HomePage() {
  return (
    <main
      className={vstack({
        gap: "min(10vw, 8rem)",
      })}
    >
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
          pt: 20,
        })}
      >
        <Intro />
        <ResumeLink />
        <CurrentPosition />
      </section>
      <RecentProjects />
      <section
        className={grid({
          gap: 4,
          gridTemplateColumns: {
            base: "auto",
            md: "repeat(2, 1fr)",
            xl: "60ch auto",
          },
        })}
      >
        <Skills />
        <About />
        <Contact />
      </section>
      <LatestBlogPosts />
    </main>
  );
}
