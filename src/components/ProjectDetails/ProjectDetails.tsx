import type { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillPlayFill, BsGithub } from 'react-icons/bs';
import { PhotoView } from 'react-photo-view';
import { TechStack } from '../UI/TechStack/TechStack';
import { Title } from '../UI/Title/Title';
import styles from './ProjectDetails.module.scss';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.Header}
        style={{ backgroundImage: `url('${images[0]}')` }}>
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
      </motion.div>
      <p className={styles.Description}>{description.long}</p>
      <ol className={styles.Features} style={{ listStyle: 'inside' }}>
        {description?.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ol>
      <div className={styles.Screenshots}>
        <Title>Screenshots</Title>
        <div className={styles.Gallery}>
          {images.map((image) => (
            <PhotoView key={image} src={`${image}`}>
              <div className={styles.Image}>
                <Image src={`${image}`} alt={title} fill />
              </div>
            </PhotoView>
          ))}
        </div>
      </div>
    </section>
  );
};
