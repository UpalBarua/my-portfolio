import { Container } from '@/components/UI/Container/Container';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Skills } from '@/components/Skills/Skills';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Skills />
      <LatestProjects />
      <ContactMe />
      <Footer />
    </Container>
  );
}
