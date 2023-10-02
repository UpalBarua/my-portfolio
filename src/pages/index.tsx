import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero/Hero';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { Skills } from '@/components/Skills/Skills';
import type { Project } from '@/types/project';
import { getProjects } from '@/utils/getProjects';
import Head from 'next/head';

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

const Home = ({ projects }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Upal_Barua</title>
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
