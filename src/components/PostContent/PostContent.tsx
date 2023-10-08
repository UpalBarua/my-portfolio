import type { PostType } from '@/types/types';
import Markdown from 'markdown-to-jsx';
import styles from './PostContent.module.scss';
import { Title } from '../UI/Title/Title';

const PostContent = ({ content, data: { title, date } }: PostType) => {
  return (
    <article className={`${styles.PostContent} markdown-body`}>
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Date}>{date}</p>
      <Markdown>{content}</Markdown>
    </article>
  );
};

export default PostContent;
