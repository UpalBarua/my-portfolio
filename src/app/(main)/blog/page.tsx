import { MotionDiv } from "@/components/motion-div";
import { PostsCard } from "@/components/PostsCard/PostsCard";
import getPostMetadata from "@/lib/get-post-metadata";

import { css } from "styled-system/css";
import { grid, vstack } from "styled-system/patterns";

export default function BlogPage() {
  const posts = getPostMetadata();

  return (
    <MotionDiv
      className={vstack({
        gap: 4,
        maxW: "5xl",
        py: 20,
      })}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1
        className={css({
          textStyle: "title",
          fontSize: "4xl",
        })}
      >
        Personal Blog
      </h1>
      <p
        className={css({
          textStyle: "text",
          maxW: "60%",
          color: "foreground.secondary",
          textAlign: "center",
        })}
      >
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div
        className={grid({
          gap: 4,
          pt: 4,
          columns: 2,
        })}
      >
        {posts.map((post) => (
          <PostsCard key={post.slug} {...post} />
        ))}
      </div>
    </MotionDiv>
  );
}
