import { SkillCard } from '../SkillCard/SkillCard';
import { Title } from '../UI/Title/Title';
import styles from './Skills.module.scss';
import { skillsList } from '@/data/data';

export const Skills = () => {
  return (
    <section className={styles.Skills} id="skills">
      <Title>Tools & Technologies</Title>
      <ul className={styles.SkillsContainer}>
        {skillsList.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </ul>
    </section>
  );
};
