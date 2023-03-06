import styles from './TechStack.module.scss';

interface TechStackProps {
  techStack: {
    tool: string;
  }[];
}

export const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div className={styles.TechStack}>
      {techStack.map((tool, index) => (
        <span key={index}>{tool}</span>
      ))}
    </div>
  );
};
