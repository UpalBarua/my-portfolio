import { Title } from "@/components/UI/Title/Title";
import { TechStack } from "@/components/UI/tech-stack/tech-stack";
import { MotionDiv } from "@/components/motion-div";
import { PhotoView } from "@/components/photo-provider";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill, BsGithub } from "react-icons/bs";
import { css } from "styled-system/css";
import { vstack, grid } from "styled-system/patterns";

const PROJECT = {
  id: "thrivenvision",
  images: [
    "/images/projects/thrivenvision-00.png",
    "/images/projects/thrivenvision-01.png",
    "/images/projects/thrivenvision-02.png",
    "/images/projects/thrivenvision-03.png",
    "/images/projects/thrivenvision-04.png",
    "/images/projects/thrivenvision-05.png",
    "/images/projects/thrivenvision-06.png",
    "/images/projects/thrivenvision-07.png",
  ],
  title: "Thrivenvision",
  description: {
    short:
      "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
    long: "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
    features: [
      "Built using the latest Next.js app directory structure",
      "Utilized Firestore as the database and Firebase Storage for file storage",
      "Styled with Tailwind CSS and Next UI components",
      "Incorporated scroll animations using Framer Motion",
      "Utilized libraries like React Hook Form and Zod for form handling and validation",
    ],
  },
  techStack: [
    "Nextjs",
    "TypeScript",
    "TailwindCSS",
    "Firebase",
    "Framer Motion",
  ],
  links: {
    live: "https://www.thrivenvision.studio/",
    git: "https://github.com/upalbarua/thrivenvision",
  },
};

type ProjectDetailsProps = {
  params: { projectId: string };
};

export default async function ProjectDetails({
  params: { projectId },
}: ProjectDetailsProps) {
  const {
    images,
    title,
    techStack,
    links: { git, live },
    description,
  } = PROJECT;

  // await getProjectById(projectId);

  return (
    <section
      className={vstack({
        gap: 4,
        alignItems: "start",
        maxW: "50rem",
        mx: "auto",
        pt: 20,
        pb: 20,
      })}
    >
      <MotionDiv
        className={grid({
          alignItems: "end",
          gridTemplateColumns: "auto repeat(2, max-content)",
          rounded: "2xl",
          h: "22rem",
          bgPosition: "center",
          bgRepeat: "no-repeat",
          bgSize: "cover",
        })}
        style={{ backgroundImage: `url('${images[0]}')` }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h3
          className={css({
            fontSize: "3xl",
            fontWeight: "medium",
          })}
        >
          {title}
        </h3>
        <a href="#">
          <BsFillPlayFill />
        </a>
        <a href="#">
          <BsGithub />
        </a>
        <TechStack techStack={techStack} />
      </MotionDiv>
      <div>
        {/* <Post content={description} /> */}
        {description.long}
      </div>
      <div>
        <h2>Screenshots</h2>
        {images.map((image) => (
          <PhotoView key={image} src={`${image}`}>
            <div>
              <Image src={`${image}`} alt={title} width={600} height={400} />
            </div>
          </PhotoView>
        ))}
      </div>
    </section>
  );
}
