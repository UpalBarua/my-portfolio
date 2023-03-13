import Head from 'next/head';
import { MyProjects } from '@/components/MyProjects/MyProjects';
import { getProjects } from '@/utils/getProjects';
import { Footer } from '@/components/Footer/Footer';

export default function index({ projects }: { projects: IProject[] }) {
  return (
    <>
      <Head>
        <title>Upal Barua | Projects</title>
      </Head>
      <MyProjects projects={projects} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};
