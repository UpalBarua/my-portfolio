import type { Project } from '@/types/project';
import Image from 'next/image';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button } from '../UI/Button/Button';
import { TechStack } from '../UI/TechStack/TechStack';
import { Title } from '../UI/Title/Title';
import styles from './ProjectDetails.module.scss';

export const ProjectDetails = ({
  id,
  images,
  title,
  description,
  techStack,
  links,
}: Project) => {
  return (
    <PhotoProvider>
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
        <ol className={styles.Features} style={{ listStyle: 'inside' }}>
          {description?.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ol>
        <div className={styles.Screenshots}>
          <Title>Screenshots</Title>
          <div className={styles.Gallery}>
            {images.map((image, index) => (
              <PhotoView
                key={index}
                src={`/images/projects/${id}-${image}.png`}>
                <Image
                  className={styles.Image}
                  src={`/images/projects/${id}-${image}.png`}
                  alt={title}
                  height={350}
                  width={1200}
                />
              </PhotoView>
            ))}
          </div>
        </div>
      </section>
    </PhotoProvider>
  );
};
