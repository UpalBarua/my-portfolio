import { Footer } from '@/components/Footer/Footer';
import { MyProjects } from '@/components/MyProjects/MyProjects';
import { projects } from '@/data/data';
import Head from 'next/head';

const Projects = () => {
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
