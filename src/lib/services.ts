import { db, storage } from "@/firebase/firebase.config";
import type { Post, Project } from "@/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export type Skill = {
  id?: string;
  name: string;
  iconUrl: string;
};

export const addNewSkill = async (newSkill: Skill) => {
  await addDoc(collection(db, "skills"), newSkill);
};

export const getAllSkills = async () => {
  const skills: Skill[] = [];
  const querySnapshot = await getDocs(collection(db, "skills"));

  querySnapshot.forEach((doc) => {
    skills.push({
      id: doc.id,
      ...doc.data(),
    } as Skill);
  });

  return skills;
};

export const getRecentProjects = async () => {
  const projects: Project[] = [];
  const querySnapshot = await getDocs(collection(db, "projects"));

  querySnapshot.forEach((doc) => {
    projects.push({
      id: doc.id,
      ...doc.data(),
    } as Project);
  });

  return projects;
};

export const removeSkill = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "skills", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.iconUrl);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "skills", id));
};

export const addNewPost = async (newPost: Post) => {
  await addDoc(collection(db, "posts"), newPost);
};

export const getPostById = async (id: string) => {
  const docSnapshot = await getDoc(doc(db, "posts", id));
  return { id: docSnapshot.id, ...docSnapshot.data() } as Post;
};

export const removePost = async (id: string) => {
  await deleteDoc(doc(db, "posts", id));
};

export const addNewProject = async (newProject: Project) => {
  await addDoc(collection(db, "projects"), newProject);
};

export const removeProject = async (id: string) => {
  await deleteDoc(doc(db, "projects", id));
};

export const getProjectById = async (id: string) => {
  const docSnapshot = await getDoc(doc(db, "projects", id));
  return { id: docSnapshot.id, ...docSnapshot.data() } as Project;
};
