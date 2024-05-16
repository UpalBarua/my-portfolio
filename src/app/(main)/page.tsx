import { AboutMe } from "@/components/about-me/about-me";
import { ContactMe } from "@/components/contact-me/contact-me";
import { Hero } from "@/components/hero/hero";
import { RecentProjects } from "@/components/recent-projects/recent-projects";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";
import { Skills } from "@/components/skills/skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <RecentProjects />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <ContactMe />
    </main>
  );
}
