import getPostMetadata from "@/lib/get-post-metadata";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";
import { circle, grid, hstack } from "styled-system/patterns";
import { PostsCard } from "./PostsCard/PostsCard";

export function LatestBlogPosts() {
  const posts = getPostMetadata();

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
            textStyle: "headline",
          })}
        >
          Latest Blog Posts
        </h2>
        <Link
          className={hstack({
            border: "2px solid {colors.border}",
            rounded: "full",
            ps: 6,
            fontWeight: "medium",
            bgColor: "background.muted",
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
          mb: 20,
          columns: {
            base: 1,
            md: 2,
          },
          "&>*:last-child": {
            roundedBottomRight: "3rem",
          },
          "&>*:nth-child(3)": {
            roundedBottomLeft: "3rem",
          },
        })}
      >
        {posts.map((post) => (
          <PostsCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
