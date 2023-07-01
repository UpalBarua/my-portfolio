import { FC } from 'react';
import Head from 'next/head';
import { Hero } from '@/components/Hero/Hero';
import { Skills } from '@/components/Skills/Skills';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';
import { getProjects } from '@/utils/getProjects';
import type { Project } from '@/types/project';

interface HomeProps {
  projects: Project[];
}

export const getStaticProps = async () => {
  try {
    const projects = await getProjects();

    return {
      props: {
        projects: projects.splice(0, 2),
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        projects: [],
      },
    };
  }
};

const Home: FC<HomeProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Upal Barua</title>
      </Head>
      <Hero />
      <Skills />
      <LatestProjects projects={projects} />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
