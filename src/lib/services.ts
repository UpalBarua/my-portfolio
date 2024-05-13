import { db, storage } from "@/firebase/firebase.config";
import { addDoc, collection, deleteDoc, doc, getDoc } from "firebase/firestore";
import type { Post } from "@/types";
import { deleteObject, ref } from "firebase/storage";

export type Skill = {
  id?: string;
  name: string;
  iconUrl: string;
};

export const addNewSkill = async (newSkill: Skill) => {
  await addDoc(collection(db, "skills"), newSkill);
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
