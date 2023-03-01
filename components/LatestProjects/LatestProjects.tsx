import Image from 'next/image';
import Link from 'next/link';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import styles from './LatestProjects.module.scss';

const PROJECTS = [
  {
    id: 0,
    title: 'Recruit Co',
    description: {
      short:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
      long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
    },
    stack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
    links: {
      live: '/',
      git: '/',
    },
  },
  {
    id: 1,
    title: 'Recruit Co',
    description: {
      short:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
      long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, itaque accusantium commodi expedita similique porro quasi et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam et maxime corporis laboriosam',
    },
    stack: ['React', 'SASS', 'Firebase', 'Express.js', 'MongoDB'],
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
        <div className={styles.ProjectCard}>
          <Image
            className={styles.Image}
            src="/project0.webp"
            alt="Recruit Co"
            height={500}
            width={500}
          />
          <div className={styles.Body}>
            <h3 className={styles.Title}>Recruit Co</h3>
            <p className={styles.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              adipisci expedita accusamus tempore excepturi quasi magnam. Animi,
              eaque! Ipsam vero minima officia hic voluptatum non, optio vitae
            </p>
            <div className={styles.TechStack}>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
            </div>
            <div className={styles.Footer}>
              <div className={styles.Links}>
                <Link className={styles.Link} href={'/'}>
                  <BsFillPlayFill />
                </Link>
                <Link className={styles.Link} href={'/'}>
                  <BsGithub />
                </Link>
              </div>
              <Button className={styles.Button} type="primary">
                <span
                  style={{
                    fontSize: '1rem',
                  }}>
                  Details
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
