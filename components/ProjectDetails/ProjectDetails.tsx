import Image from 'next/image';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';
import { TechStack } from '../UI/TechStack/TechStack';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import styles from './ProjectDetails.module.scss';

export const ProjectDetails = ({
  id,
  images,
  title,
  description,
  techStack,
  links,
}: IProject) => {
  return (
    <section className={styles.ProjectDetails}>
      <Image
        className={styles.Image}
        src={`/images/projects/${id}-00.png`}
        alt={title}
        height={350}
        width={800}
      />
      <div className={styles.Header}>
        <Title style={{ marginBottom: '0' }}>{title}</Title>
        <div className={styles.Links}>
          <Button as="link" type="rounded" href={links.live} target="_blank">
            <BsFillPlayFill />
          </Button>
          <Button as="link" type="rounded" href={links.git} target="_blank">
            <BsGithub />
          </Button>
        </div>
      </div>
      <TechStack techStack={techStack} />
      <p className={styles.Description}>{description.long}</p>
      <ul className={styles.Features}>
        {description?.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {/* rc */}
      <div className={styles.Screenshots}>
        <Title>Screenshots</Title>
        <div className={styles.Gallery}>
          {images.map((image, index) => (
            <Image
              key={index}
              className={styles.Image}
              src={`/images/projects/${id}-${image}.png`}
              alt={title}
              height={350}
              width={1200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
