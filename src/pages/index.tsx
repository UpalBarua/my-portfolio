import { AboutMe } from "@/components/AboutMe/AboutMe";
import { ContactMe } from "@/components/ContactMe/ContactMe";
import { Hero } from "@/components/Hero/Hero";
import { MyProjects } from "@/components/MyProjects/MyProjects";
import { Skills } from "@/components/Skills/Skills";
import Head from "next/head";
import { Fragment } from "react";
import { SectionDivider } from "@/components/SectionDivider/SectionDivider";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Upal Barua | Personal Portfolio</title>
      </Head>
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
    </Fragment>
  );
};

export default Home;
