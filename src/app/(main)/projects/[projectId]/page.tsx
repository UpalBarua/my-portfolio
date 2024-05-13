import { Post } from "@/app/(main)/blog/[postId]/post";
import { TechStack } from "@/components/UI/TechStack/TechStack";
import { Title } from "@/components/UI/Title/Title";
import { MotionDiv } from "@/components/motion-div";
import { getProjectById } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill, BsGithub } from "react-icons/bs";
import styles from "./project-details.module.scss";
import { PhotoView } from "@/components/photo-provider";

type ProjectDetailsProps = {
  params: { projectId: string };
};

export default async function ProjectDetails({
  params: { projectId },
}: ProjectDetailsProps) {
  const {
    description,
    images,
    title,
    techStack,
    links: { git, live },
  } = await getProjectById(projectId);

  return (
    <section className={styles.ProjectDetails}>
      <MotionDiv
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.Header}
        style={{ backgroundImage: `url('${images[0]}')` }}
      >
        <div className={styles.Content}>
          <div>
            <h3 className={styles.Title}>{title}</h3>
            <div className={styles.Links}>
              <Link className={styles.Link} href={live} target="_blank">
                <BsFillPlayFill />
              </Link>
              <Link className={styles.Link} href={git} target="_blank">
                <BsGithub />
              </Link>
            </div>
          </div>
          <div>
            <TechStack techStack={techStack} />
          </div>
        </div>
      </MotionDiv>
      <div className={styles.Description}>
        <Post content={description} />
      </div>
      <div className={styles.Screenshots}>
        <Title>Screenshots</Title>
        <div className={styles.Gallery}>
          {images.map((image) => (
            <PhotoView key={image} src={`${image}`}>
              <div className={styles.Image}>
                <Image src={`${image}`} alt={title} fill />
              </div>
            </PhotoView>
          ))}
        </div>
      </div>
    </section>
  );
}
