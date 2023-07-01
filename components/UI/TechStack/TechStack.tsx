import { FC } from 'react';
import styles from './TechStack.module.scss';

interface TechStackProps {
  techStack: string[];
}

export const TechStack: FC<TechStackProps> = ({ techStack }) => {
  return (
    <div className={styles.TechStack}>
      {techStack.map((tool, index) => (
        <span key={index}>{tool}</span>
      ))}
    </div>
  );
};
