import { navLinks, projects } from "@/config";

export type Project = (typeof projects)[number];
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
