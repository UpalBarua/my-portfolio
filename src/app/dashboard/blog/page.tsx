"use client";

import { db } from "@/firebase/firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styles from "./blog.module.scss";
import { NewPost } from "@/components/new-post/new-post";
import { Button } from "@/components/UI/Button/Button";

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
        <Button asLink variant="primary" href="/dashboard/blog/new">
          Add New Post
        </Button>
      </div>
      {/* <ul className={styles.skills}> */}
      {/*   {skillsList.map((skill) => ( */}
      {/*     <DashboardSkillCard key={skill.iconUrl} {...skill} /> */}
      {/*   ))} */}
      {/* </ul> */}
    </section>
  );
}
