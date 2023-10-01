import styles from './TechStack.module.scss';

interface TechStackProps {
  techStack: string[];
}

export const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div className={styles.TechStack}>
      {techStack.map((tool) => (
        <span key={tool}>{tool}</span>
      ))}
    </div>
  );
};
