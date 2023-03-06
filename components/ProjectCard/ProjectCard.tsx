import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../UI/Button/Button';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import styles from './ProjectCard.module.scss';
import { TechStack } from '../UI/TechStack/TechStack';

export const ProjectCard = ({
  id,
  image,
  title,
  description,
  techStack,
  links,
}: IProject) => {
  return (
    <div className={styles.ProjectCard}>
      <Image
        className={styles.Image}
        src={`/images/${image}`}
        alt={title}
        height={500}
        width={500}
      />
      <div className={styles.Body}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>{description.long}</p>
        <TechStack techStack={techStack} />
        <div className={styles.Footer}>
          <div className={styles.Links}>
            <Button as="link" type="rounded" href={links.live} target="_blank">
              <BsFillPlayFill />
            </Button>
            <Button as="link" type="rounded" href={links.git} target="_blank">
              <BsGithub />
            </Button>
          </div>
          <Button type="primary" as="link" href={`projects/${id}`}>
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
