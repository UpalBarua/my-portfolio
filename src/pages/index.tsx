import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero/Hero';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { Skills } from '@/components/Skills/Skills';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Upal_Barua</title>
      </Head>
      <Hero />
      <Skills />
      <LatestProjects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
