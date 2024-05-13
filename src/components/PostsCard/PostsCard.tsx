import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types";
import Link from "next/link";
import styles from "./PostsCard.module.scss";

export function PostsCard({
  id,
  metaData: { title, subtitle, date },
}: Readonly<Post>) {
  return (
    <Link className={styles.PostCard} href={`/blog/${id}`}>
      <p className={styles.Date}>{formatDate(date)}</p>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Subtitle}>{subtitle}</p>
    </Link>
  );
}
