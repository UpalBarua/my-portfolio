import { Title } from '../UI/Title/Title';
import { motion } from 'framer-motion';
import styles from './MyBlog.module.scss';
import getPostMetadata from '@/lib/getPostMetadta';
import type { PostMetadata } from '@/types/types';

type MyBlogProps = {
  postMetadata: PostMetadata[];
};

const MyBlog = ({ postMetadata }: MyBlogProps) => {
  console.log(postMetadata);

  return (
    <motion.section
      className={styles.MyBlog}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
      <Title>My Blog Posts</Title>
      <p className={styles.Subtitle}>
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div>{postMetadata?.map((post) => JSON.stringify(post))}</div>
    </motion.section>
  );
};

export default MyBlog;
