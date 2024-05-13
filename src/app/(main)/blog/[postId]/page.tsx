import { MotionDiv } from "@/components/motion-div";
import { getPostById } from "@/lib/services";
import styles from "./PostContent.module.scss";
import { formatDate } from "@/lib/format-date";
import { Post } from "./post";

type PostPageProps = {
  params: {
    postId: string;
  };
};

export default async function PostPage({
  params: { postId },
}: Readonly<PostPageProps>) {
  const {
    metaData: { title, date },
    content,
  } = await getPostById(postId);

  return (
    <MotionDiv
      className={styles.PostContent}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Date}>{formatDate(date)}</p>
      <Post content={content} />
    </MotionDiv>
  );
}
