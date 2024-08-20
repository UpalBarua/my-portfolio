import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types";
import Link from "next/link";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import { CalendarClock, Dot } from "lucide-react";

export function PostsCard({
  id,
  metaData: { title, subtitle, date },
}: Readonly<Post>) {
  return (
    <Link
      className={vstack({
        layerStyle: "container",
        gap: 2,
        alignItems: "start",
      })}
      href={`/blog/${id}`}
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
        {subtitle} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae, libero nobis! Cum nulla velit debitis aliquid labore voluptas
        suscipit est minus voluptates fugit odit eius, pariatur atque eveniet
        quod voluptatum!
      </p>
    </Link>
  );
}
