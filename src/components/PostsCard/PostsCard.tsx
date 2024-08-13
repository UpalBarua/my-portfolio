import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types";
import Link from "next/link";
import { css } from "styled-system/css";
import { vstack } from "styled-system/patterns";

export function PostsCard({
  id,
  metaData: { title, subtitle, date },
}: Readonly<Post>) {
  return (
    <Link
      className={vstack({
        gap: 2,
        alignItems: "start",
        border: "2px solid",
        borderColor: "fg/10",
        rounded: "2xl",
        p: "8",
        bg: "dark.darker",
        shadow: "sm",
      })}
      href={`/blog/${id}`}
    >
      <p
        className={css({
          color: "fg/60",
        })}
      >
        {formatDate(date)} / 5min read
      </p>
      <h3
        className={css({
          fontSize: "2xl",
          fontWeight: "medium",
        })}
      >
        {title}
      </h3>
      <p>{subtitle}</p>
    </Link>
  );
}
