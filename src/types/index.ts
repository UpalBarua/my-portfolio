import { navLinks } from "@/config";
import { contactFormSchema } from "@/schemas";
import { projects } from "@/config/projects";

export type SectionNames = (typeof navLinks)[number]["title"];

export type Project = (typeof projects)[number];

export type Post = {
  id?: string;
  metaData: {
    title: string;
    subtitle: string;
    date: string;
  };
  content?: string;
};

// export type Project = {
//   id?: string;
//   images: string[];
//   title: string;
//   description: string;
//   techStack: string[];
//   links: {
//     live: string;
//     git: string;
//   };
// };

export type PostMetadata = {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
};

export type PostType = {
  content: string;
  data: {
    title: string;
    subtitle: string;
    date: string;
  };
  isEmpty: boolean;
  excerpt: string;
};
