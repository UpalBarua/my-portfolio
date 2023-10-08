import { projects } from '@/data/data';
import { navLinks } from '@/data/data';

export type Project = (typeof projects)[number];
export type SectionNames = (typeof navLinks)[number]['title'];

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
