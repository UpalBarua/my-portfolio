import { css } from "styled-system/css";
import { grid, hstack, circle } from "styled-system/patterns";
import { PostsCard } from "./PostsCard/PostsCard";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const BLOG_POST = {
  id: "flkajdfl",
  metaData: {
    title: "This is a dummy title for test purposes",
    subtitle:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    date: "Tue Aug 13 2024 22:15:21 GMT+0600 (Bangladesh Standard Time)",
  },
};

export function LatestBlogPosts() {
  return (
    <section
      className={css({
        pb: 20,
      })}
    >
      <div
        className={hstack({
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pb: 10,
        })}
      >
        <h2
          className={css({
            textStyle: "title",
            fontSize: "4xl",
          })}
        >
          Latest Blog Posts 📄
        </h2>
        <Link
          className={hstack({
            rounded: "full",
            ps: 6,
            color: "background",
            fontWeight: "medium",
            bgColor: "accent",
          })}
          href="/projects"
        >
          <span>View All</span>
          <div
            className={circle({
              size: 10,
              m: 1,
              color: "foreground",
              bgColor: "background",
            })}
          >
            <ExternalLink size={18} />
          </div>
        </Link>
      </div>
      <div
        className={grid({
          gap: 4,
          alignItems: "start",
          mb: 20,
          columns: {
            base: 1,
            md: 2,
          },
          justifyItems: "start",
          "&>*:last-child": {
            roundedBottomRight: "3rem",
          },
          "&>*:nth-child(3)": {
            roundedBottomLeft: "3rem",
          },
        })}
      >
        <PostsCard {...BLOG_POST} />
        <PostsCard {...BLOG_POST} />
        <PostsCard {...BLOG_POST} />
        <PostsCard {...BLOG_POST} />
      </div>
    </section>
  );
}
