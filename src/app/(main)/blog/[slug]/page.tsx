import PostContent from "@/components/PostContent/PostContent";
import fs from "fs";
import "github-markdown-css";
import matter from "gray-matter";

export default function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const file = fs.readFileSync(`src/config/posts/${slug}.md`, "utf-8");
  const { orig, ...post } = matter(file);

  return <PostContent {...post} />;
}
