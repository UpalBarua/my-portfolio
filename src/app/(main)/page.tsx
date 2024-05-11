"use client";

import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Hero } from "@/components/Hero/Hero";
import { MyProjects } from "@/components/MyProjects/MyProjects";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";
import { Skills } from "@/components/Skills/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <MyProjects />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <ContactMe />
    </main>
  );
}
