import type { PostType } from '@/types/types';
import Markdown from 'markdown-to-jsx';
import styles from './PostContent.module.scss';
import { Title } from '../UI/Title/Title';
import { motion } from 'framer-motion';

const PostContent = ({ content, data: { title, date } }: PostType) => {
  return (
    <motion.article
      className={`${styles.PostContent} markdown-body`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Date}>{date}</p>
      <Markdown>{content}</Markdown>
    </motion.article>
  );
};

export default PostContent;
