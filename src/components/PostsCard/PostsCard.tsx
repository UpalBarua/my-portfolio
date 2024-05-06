import type { PostMetadata } from "@/types";
import Link from "next/link";
import styles from "./PostsCard.module.scss";

const PostsCard = ({ title, date, subtitle, slug }: PostMetadata) => {
  return (
    <Link className={styles.PostCard} href={`/blog/${slug}`}>
      <p className={styles.Date}>{date}</p>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Subtitle}>{subtitle}</p>
    </Link>
  );
};

export default PostsCard;
