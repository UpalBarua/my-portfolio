import { Title } from '../UI/Title/Title';
import { motion } from 'framer-motion';
import styles from './MyBlog.module.scss';
import getPostMetadata from '@/lib/getPostMetadta';
import type { PostMetadata } from '@/types/types';
import PostsCard from '../PostsCard/PostsCard';

type MyBlogProps = {
  postMetadata: PostMetadata[];
};

const MyBlog = ({ postMetadata }: MyBlogProps) => {
  return (
    <motion.section
      className={styles.MyBlog}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
      <Title>My Blog</Title>
      <p className={styles.Subtitle}>
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div className={styles.Posts}>
        {postMetadata?.map((post) => (
          <PostsCard key={post.slug} {...post} />
        ))}
      </div>
    </motion.section>
  );
};

export default MyBlog;
