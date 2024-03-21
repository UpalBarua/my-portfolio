import type { PostType } from "@/types/types";
import { m } from "framer-motion";
import Markdown from "markdown-to-jsx";
import styles from "./PostContent.module.scss";

const PostContent = ({ content, data: { title, date } }: PostType) => {
  return (
    <m.article
      className={`${styles.PostContent} markdown-body`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Date}>{date}</p>
      <Markdown>{content}</Markdown>
    </m.article>
  );
};

export default PostContent;
