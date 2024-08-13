import { AboutMe } from "@/components/about-me/about-me";
import { ContactMe } from "@/components/contact-me/contact-me";
import { Hero } from "@/components/hero/hero";
import { RecentProjects } from "@/components/recent-projects/recent-projects";
import { Skills } from "@/components/skills/skills";
import { grid } from "styled-system/patterns";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RecentProjects />
      <Skills />
      <section
        className={grid({
          gridTemplateColumns: "60ch auto",
          pb: 20,
        })}
      >
        <AboutMe />
        <ContactMe />
      </section>
    </main>
  );
}
