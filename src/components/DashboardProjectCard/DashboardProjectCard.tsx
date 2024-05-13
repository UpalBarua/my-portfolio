import { removeProject } from "@/lib/services";
import type { Project } from "@/types/";
import parse from "html-react-parser";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { TechStack } from "../UI/TechStack/TechStack";
import styles from "./DashboardProjectCard.module.scss";

export const DashboardProjectCard = ({
  id,
  title,
  description,
  techStack,
  images,
}: Project) => {
  const handleRemove = async (id: string) => {
    try {
      await removeProject(id);
      toast.success("Project removed.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div
      className={styles.ProjectCard}
      style={{ backgroundImage: `url("${images[0]}")` }}
    >
      <div className={styles.Body}>
        <h3 className={styles.Title}>{title}</h3>
        <p className={styles.Description}>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
        <TechStack techStack={techStack} />
      </div>
      <button
        className={styles.delete_button}
        onClick={() => handleRemove(id as string)}
      >
        <FaRegTrashAlt />
        <span>Remove</span>
      </button>
    </div>
  );
};
