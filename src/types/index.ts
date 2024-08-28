import { navLinks } from "@/config";
import { projects } from "@/config/projects";

export type SectionNames = (typeof navLinks)[number]["title"];

export type Project = (typeof projects)[number];

export type PostMetadata = {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
};

export type Post = {
  id?: string;
  metaData: {
    title: string;
    subtitle: string;
    date: string;
  };
  content?: string;
};
