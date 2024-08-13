import { css } from "styled-system/css";
import { grid } from "styled-system/patterns";
import { PostsCard } from "./PostsCard/PostsCard";

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
    <section>
      <div
        className={css({
          border: "2px solid",
          borderColor: "fg/10",
          rounded: "2xl",
          roundedTopLeft: "3rem",
          roundedTopRight: "3rem",
          h: "max-content",
          my: 4,
          p: "10",
          bg: "dark.darker",
          shadow: "sm",
        })}
      >
        <h2
          className={css({
            pb: 2,
            letterSpacing: "tight",
            textTransform: "capitalize",
            fontSize: "3xl",
            fontWeight: "medium",
            lineHeight: "snug",
          })}
        >
          Latest Blog Posts
        </h2>
        <p
          className={css({
            maxW: "40rem",
            pr: "16",
            color: "fg/60",
            textWrap: "pretty",
            fontSize: "xl",
            lineHeight: "relaxed",
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quod hic perspiciatis aliquid.
        </p>
      </div>
      <div
        className={grid({
          gap: 4,
          alignItems: "start",
          mb: 20,
          columns: 2,
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
