import MyBlog from "@/components/MyBlog/MyBlog";
import getPostMetadata from "@/lib/getPostMetadta";
import { PostMetadata } from "@/types";
import Head from "next/head";

export const getStaticProps = () => {
  try {
    const postMetadata = getPostMetadata();

    return {
      props: {
        postMetadata,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        postsMetadata: [],
      },
    };
  }
};

const Blog = ({ postMetadata }: { postMetadata: PostMetadata[] }) => {
  return (
    <>
      <Head>
        <title>Upal Barua | Personal Blog</title>
      </Head>
      <MyBlog postMetadata={postMetadata} />
    </>
  );
};

export default Blog;
