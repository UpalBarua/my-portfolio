import { PostsCard } from "@/components/post-card";
import getPostMetadata from "@/lib/get-post-metadata";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";
import { circle, grid, hstack, stack } from "styled-system/patterns";

export function LatestBlogPosts() {
  const posts = getPostMetadata();

  return (
    <section>
      <div
        className={stack({
          gap: 4,
          direction: {
            base: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            base: "start",
            md: "center",
          },
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
            roundedBottomRight: { md: "3rem" },
          },
          "&>*:nth-child(3)": {
            roundedBottomLeft: { md: "3rem" },
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
