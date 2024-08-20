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
