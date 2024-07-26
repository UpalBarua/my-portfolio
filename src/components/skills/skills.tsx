import { SkillCard } from "@/components/skill-card/skill-card";
import { Title } from "@/components/UI/Title/Title";
import { SectionInView } from "@/components/section-in-view";
import { getAllSkills } from "@/lib/services";

import styles from "./skills.module.scss";

export async function Skills() {
  const skills = await getAllSkills();

  return (
    <SectionInView id="skills" sectionName="Skills">
      <Title>Tech Stack</Title>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <SkillCard key={skill.iconUrl} index={index} {...skill} />
        ))}
      </ul>
    </SectionInView>
  );
}
