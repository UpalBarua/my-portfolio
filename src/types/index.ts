import { navLinks, projects } from "@/config";

export type SectionNames = (typeof navLinks)[number]["title"];

export type Post = {
  id?: string;
  metaData: {
    title: string;
    subtitle: string;
    date: string;
  };
  content: string;
};

export type Project = {
  id?: string;
  images: string[];
  title: string;
  description: string;
  techStack: string[];
  links: {
    live: string;
    git: string;
  };
};
