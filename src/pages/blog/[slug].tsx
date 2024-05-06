import PostContent from "@/components/PostContent/PostContent";
import getPostMetadata from "@/lib/getPostMetadta";
import type { TPost } from "@/types";
import fs from "fs";
import "github-markdown-css";
import matter from "gray-matter";

export const getStaticPaths = () => {
  try {
    const postMetadata = getPostMetadata();

    const paths = postMetadata.map(({ slug }) => ({
      params: {
        slug: slug.toString(),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  try {
    const file = fs.readFileSync(`src/config/posts/${slug}.md`, "utf-8");
    const { orig, ...fileContent } = matter(file);

    return {
      props: {
        post: fileContent,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        post: {},
      },
    };
  }
};

const Post = ({ post }: { post: TPost }) => {
  return <PostContent {...post} />;
};

export default Post;
