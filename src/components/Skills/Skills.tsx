"use client";

import useSectionInView from "@/hooks/useSectionInView";
import { SkillCard } from "../SkillCard/SkillCard";
import { Title } from "../UI/Title/Title";
import styles from "./Skills.module.scss";
import { useState } from "react";
import { db } from "@/firebase/firebase.config";
import { Skill } from "@/lib/services";
import { collection, onSnapshot, query } from "firebase/firestore";

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const [skillsList, setSkillsList] = useState<Skill[]>([]);

  const q = query(collection(db, "skills"));

  onSnapshot(q, (querySnapshot) => {
    const skills: Skill[] = [];
    querySnapshot.forEach((doc) => {
      skills.push({
        id: doc.id,
        ...doc.data(),
      } as Skill);
    });
    setSkillsList(skills);
  });

  return (
    <section className={styles.Skills} id="skills" ref={ref}>
      <Title>Tech Stack</Title>
      <ul className={styles.SkillsContainer}>
        {skillsList.map((skill, index) => (
          <SkillCard key={skill.iconUrl} index={index} {...skill} />
        ))}
      </ul>
    </section>
  );
};
