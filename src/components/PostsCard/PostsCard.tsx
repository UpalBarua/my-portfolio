import { formatDate } from "@/lib/format-date";
import type { PostMetadata } from "@/types";
import { CalendarClock, Dot } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";

export function PostsCard({
  title,
  subtitle,
  slug,
  date,
}: Readonly<PostMetadata>) {
  return (
    <Link
      className={vstack({
        layerStyle: "container",
        gap: 2,
        alignItems: "start",
      })}
      href={`/blog/${slug}`}
    >
      <div
        className={hstack({
          gap: 0,
          "&>*:first-child": {
            me: 2,
          },
        })}
      >
        <CalendarClock size={18} />
        <time>{formatDate(date)}</time>
        <Dot />
        <time>5min read</time>
      </div>
      <h3
        className={css({
          fontSize: "3xl",
          fontWeight: "extrabold",
        })}
      >
        {title}
      </h3>
      <p
        className={css({
          textStyle: "text",
          color: "foreground.secondary",
        })}
      >
        {subtitle}
      </p>
    </Link>
  );
}
