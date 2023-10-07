import { skillsList } from '@/data/data';
import useSectionInView from '@/hooks/useSectionInView';
import { SkillCard } from '../SkillCard/SkillCard';
import { Title } from '../UI/Title/Title';
import styles from './Skills.module.scss';

export const Skills = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section className={styles.Skills} id="skills" ref={ref}>
      <Title>My Skills</Title>
      <ul className={styles.SkillsContainer}>
        {skillsList.map((skill, index) => (
          <SkillCard key={skill.icon} index={index} {...skill} />
        ))}
      </ul>
    </section>
  );
};
