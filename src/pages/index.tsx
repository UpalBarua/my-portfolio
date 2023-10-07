import { AboutMe } from '@/components/AboutMe/AboutMe';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Hero } from '@/components/Hero/Hero';
import { MyProjects } from '@/components/MyProjects/MyProjects';
import { Skills } from '@/components/Skills/Skills';

const Home = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <MyProjects />
      <AboutMe />
      <ContactMe />
    </main>
  );
};

export default Home;
