import MyBlog from "@/components/MyBlog/MyBlog";
import getPostMetadata from "@/lib/getPostMetadta";
import Head from "next/head";

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  return (
    <>
      <Head>
        <title>Upal Barua | Personal Blog</title>
      </Head>
      <MyBlog postMetadata={postMetadata} />
    </>
  );
}
