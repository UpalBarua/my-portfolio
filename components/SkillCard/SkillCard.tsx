import React from 'react';
import Image from 'next/image';
import styles from './SkillCard.module.scss';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
}

export const SkillCard = ({ icon, title }: SkillCardProps) => {
  return (
    <div className={styles.SkillCard}>
      <Image
        className={styles.Icon}
        src={`/icons/${icon}`}
        alt={title}
        height={80}
        width={80}
      />
      <h3>{title}</h3>
    </div>
  );
};
