import { Container } from '@/components/UI/Container/Container';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Skills } from '@/components/Skills/Skills';
import { LatestProjects } from '@/components/LatestProjects/LatestProjects';
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Footer } from '@/components/Footer/Footer';
import { getProjects } from '@/utils/getProjects';

// const PROJECTS = [
//   {
//     id: 0,
//     image: 'project0.webp',
//     title: 'Recruit Co',
//     description: {
//       short:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
//       long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
//     },
//     techStack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
//     links: {
//       live: '/',
//       git: '/',
//     },
//   },
//   {
//     id: 1,
//     image: 'project0.webp',
//     title: 'Recruit Co',
//     description: {
//       short:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
//       long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
//     },
//     techStack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
//     links: {
//       live: '/',
//       git: '/',
//     },
//   },
// ];

export default function Home({ projects }) {
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
