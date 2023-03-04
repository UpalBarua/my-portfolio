import { Hero } from '@/components/Hero/Hero';
import { Skills } from '@/components/Skills/Skills';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';
import { getProjects } from '@/utils/getProjects';

export default function Home({ projects }: { projects: IProject[] }) {
  return (
    <>
      <Hero />
      <Skills />
      <LatestProjects projects={projects} />
      <ContactMe />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects: projects.splice(0, 2),
    },
  };
};
