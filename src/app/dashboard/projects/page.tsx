"use client";

import { DashboardProjectCard } from "@/components/DashboardProjectCard/DashboardProjectCard";
import { Button } from "@/components/UI/Button/Button";
import { db } from "@/firebase/firebase.config";
import { Project } from "@/types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState } from "react";
import styles from "./projects-page.module.scss";

export default function ProjectsPage() {
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
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Manage Projects</h2>
        <Button asLink variant="primary" href="/dashboard/projects/new">
          Add New Project
        </Button>
      </div>
      <ul className={styles.skills}>
        {projects.map((project) => (
          <DashboardProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}
