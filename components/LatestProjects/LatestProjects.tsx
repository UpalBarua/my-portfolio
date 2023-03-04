import { Title } from '../UI/Title/Title';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { Button } from '../UI/Button/Button';
import styles from './LatestProjects.module.scss';

const PROJECTS = [
  {
    id: 0,
    image: 'project0.webp',
    title: 'Recruit Co',
    description: {
      short:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
      long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
    },
    techStack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
    links: {
      live: '/',
      git: '/',
    },
  },
  {
    id: 1,
    image: 'project0.webp',
    title: 'Recruit Co',
    description: {
      short:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
      long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
    },
    techStack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
    links: {
      live: '/',
      git: '/',
    },
  },
];

export const LatestProjects = () => {
  return (
    <section className={styles.LatestProjects}>
      <Title>Latest Projects</Title>
      <div className={styles.Grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {/* <Button type="secondary">Find More</Button> */}
      <Button type="secondary" as="link" href="/projects">
        Find More
      </Button>
    </section>
  );
};
