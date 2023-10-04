import Image from 'next/image';
import styles from './SkillCard.module.scss';
import { skillsList } from '@/data/data';

type SkillCardProps = (typeof skillsList)[number];

export const SkillCard = ({ icon, title }: SkillCardProps) => {
  return (
    <li className={styles.SkillCard}>
      <div className={styles.Icon}>
        <Image src={`/icons/${icon}`} alt={title} fill />
      </div>
      <p>{title}</p>
    </li>
  );
};
