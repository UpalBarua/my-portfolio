"use client";

import { db } from "@/firebase/firebase.config";
import useSectionInView from "@/hooks/useSectionInView";
import { Project } from "@/types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Title } from "../UI/Title/Title";
import styles from "./MyProjects.module.scss";

export const MyProjects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  const [projects, setProjects] = useState<Project[]>([]);

  const q = query(collection(db, "projects"));

  onSnapshot(q, (querySnapshot) => {
    const projects: Project[] = [];
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
      } as Project);
    });
    setProjects(projects);
  });

  return (
    <section className={styles.MyProjects} id="projects" ref={ref}>
      <Title>Recent Projects</Title>
      <div className={styles.Grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
