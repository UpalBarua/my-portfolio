"use client";

import { Skill, removeSkill } from "@/lib/services";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./dashboard-skill-card.module.scss";

export function DashboardSkillCard({ id, name, iconUrl }: Skill) {
  const handleRemove = async (id: string) => {
    try {
      await removeSkill(id);
      toast.success("Skill removed.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <li className={styles.SkillCard}>
      <Image
        className={styles.Icon}
        src={iconUrl}
        alt={name}
        height={80}
        width={80}
      />
      <p>{name}</p>
      <button className={styles.delete_button} onClick={() => handleRemove(id)}>
        <FaRegTrashAlt />
        <span>Remove</span>
      </button>
    </li>
  );
}
