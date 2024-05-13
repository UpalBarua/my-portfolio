"use client";

import { DashboardSkillCard } from "@/components/dashboard-skill-card/dashboard-skill-card";
import { NewSkill } from "@/components/new-skill/new-skill";
import { db } from "@/firebase/firebase.config";
import { Skill } from "@/lib/services";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styles from "./skills-page.module.scss";

export default function SkillsPage() {
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
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Manage Skills</h2>
        <NewSkill />
      </div>
      <ul className={styles.skills}>
        {skillsList.map((skill) => (
          <DashboardSkillCard key={skill.iconUrl} {...skill} />
        ))}
      </ul>
    </section>
  );
}
