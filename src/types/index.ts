import { navLinks, projects } from "@/config";

export type Project = (typeof projects)[number];
export type SectionNames = (typeof navLinks)[number]["title"];

export type PostMetadata = {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
};

export type TPost = {
  content: string;
  data: {
    title: string;
    subtitle: string;
    date: string;
  };
  isEmpty: boolean;
  excerpt: string;
};
