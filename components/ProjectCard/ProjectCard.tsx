import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../UI/Button/Button';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: {
    short: string;
    long: string;
  };
  techStack: string[];
  links: {
    live: string;
    git: string;
  };
}

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  links,
}: ProjectCardProps) => {
  return (
    <div className={styles.ProjectCard}>
      <Image
        className={styles.Image}
        src={`/${image}`}
        alt={title}
        height={500}
        width={500}
      />
      <div className={styles.Body}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description.long}</p>
        <div className={styles.TechStack}>
          {techStack.map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
        <div className={styles.Footer}>
          <div className={styles.Links}>
            <Link className={styles.Link} href={links.live}>
              <BsFillPlayFill />
            </Link>
            <Link className={styles.Link} href={links.git}>
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
  );
};
