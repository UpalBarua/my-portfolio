import { FC } from 'react';
import Head from 'next/head';
import { MyProjects } from '@/components/MyProjects/MyProjects';
import { getProjects } from '@/utils/getProjects';
import { Footer } from '@/components/Footer/Footer';
import type { Project } from '@/types/project';

interface ProjectsProps {
  projects: Project[];
}

export const getStaticProps = async () => {
  try {
    const projects = await getProjects();

    return {
      props: {
        projects,
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

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Upal Barua | Projects</title>
      </Head>
      <MyProjects projects={projects} />
      <Footer />
    </>
  );
};

export default Projects;
