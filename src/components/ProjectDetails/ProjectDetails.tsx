import type { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import { PhotoView } from 'react-photo-view';
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
    <section className={styles.ProjectDetails}>
      <div
        className={styles.Header}
        style={{ backgroundImage: `url('/images/projects/${id}-00.png')` }}>
        <div className={styles.Content}>
          <div>
            <h3 className={styles.Title}>{title}</h3>
            <div className={styles.Links}>
              <Link className={styles.Link} href={links.live} target="_blank">
                <BsFillPlayFill />
              </Link>
              <Link className={styles.Link} href={links.git} target="_blank">
                <BsGithub />
              </Link>
            </div>
          </div>
          <div>
            <TechStack techStack={techStack} />
          </div>
        </div>
      </div>
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
            <PhotoView key={index} src={`/images/projects/${id}-${image}.png`}>
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
  );
};
