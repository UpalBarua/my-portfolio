"use client";

import { db } from "@/firebase/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styles from "./blog.module.scss";
import { NewPost } from "@/components/new-post/new-post";

export default function BlogPage() {
  // const [skillsList, setSkillsList] = useState([]);
  //
  // const q = query(collection(db, "skills"));
  //
  // onSnapshot(q, (querySnapshot) => {
  //   const skills: Skill[] = [];
  //   querySnapshot.forEach((doc) => {
  //     skills.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     } as Skill);
  //   });
  //   setSkillsList(skills);
  // });

  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Manage Posts</h2>
        <NewPost />
      </div>
      {/* <ul className={styles.skills}> */}
      {/*   {skillsList.map((skill) => ( */}
      {/*     <DashboardSkillCard key={skill.iconUrl} {...skill} /> */}
      {/*   ))} */}
      {/* </ul> */}
    </section>
  );
}
