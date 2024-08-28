import { MotionDiv } from "@/components/motion-div";
import { formatDate } from "@/lib/format-date";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { css } from "styled-system/css";

import "github-markdown-css";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({
  params: { slug },
}: Readonly<PostPageProps>) {
  const file = fs.readFileSync(`src/data/posts/${slug}.md`, "utf-8");
  const { orig, ...fileContent } = matter(file);

  const {
    content,
    data: { title, date },
  } = fileContent;

  return (
    <MotionDiv
      className={css({
        maxW: "60ch",
        py: 20,
      })}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2
        className={css({
          textStyle: "title",
        })}
      >
        {title}
      </h2>
      <p
        className={css({
          textStyle: "text",
          color: "foreground.secondary",
          fontSize: "lg",
        })}
      >
        {formatDate(date)}
      </p>
      <Markdown>{content}</Markdown>
    </MotionDiv>
  );
}
