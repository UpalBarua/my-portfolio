import type { PostMetadata } from "@/types/types";
import { m } from "framer-motion";
import PostsCard from "../PostsCard/PostsCard";
import { Title } from "../UI/Title/Title";
import styles from "./MyBlog.module.scss";

type MyBlogProps = {
  postMetadata: PostMetadata[];
};

const MyBlog = ({ postMetadata }: MyBlogProps) => {
  return (
    <m.section
      className={styles.MyBlog}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Title>My Blog</Title>
      <p className={styles.Subtitle}>
        Welcome to my personal blog! 🚀 I consistently share weekly posts that
        explore my ongoing projects, the valuable lessons I'm picking up, and
        the exciting journey of my growth and progress as a developer!
      </p>
      <div className={styles.Posts}>
        {postMetadata?.map((post) => <PostsCard key={post.slug} {...post} />)}
      </div>
    </m.section>
  );
};

export default MyBlog;
