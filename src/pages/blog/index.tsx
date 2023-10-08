import { UnderConstruction } from '@/components/UnderConstruction/UnderConstruction';
import Head from 'next/head';
import { Title } from '@/components/UI/Title/Title';
import MyBlog from '@/components/MyBlog/MyBlog';
import getPostMetadata from '@/lib/getPostMetadta';
import { PostMetadata } from '@/types/types';

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
