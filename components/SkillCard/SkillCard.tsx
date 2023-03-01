import { ReactNode } from 'react';
import styles from './SkillCard.module.scss';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
}

export const SkillCard = ({ icon, title }: SkillCardProps) => {
  return (
    <div className={styles.SkillCard}>
      <i>{icon}</i>
      <h3>{title}</h3>
    </div>
  );
};
