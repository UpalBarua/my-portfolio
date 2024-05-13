import { formatDate } from "@/lib/format-date";
import { removePost } from "@/lib/services";
import type { Post } from "@/types";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./DashboardPostCard.module.scss";

export function DashboardPostsCard({
  id,
  metaData: { title, subtitle, date },
}: Readonly<Post>) {
  const handleRemove = async (id: string) => {
    try {
      await removePost(id);
      toast.success("Post removed.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className={styles.PostCard}>
      <p className={styles.Date}>{formatDate(date)}</p>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Subtitle}>{subtitle}</p>
      <button
        className={styles.delete_button}
        onClick={() => handleRemove(id as string)}
      >
        <FaRegTrashAlt />
        <span>Remove</span>
      </button>
    </div>
  );
}
