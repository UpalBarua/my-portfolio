import { projects } from '@/data/data';
import { navLinks } from '@/data/data';

export type Project = (typeof projects)[number];
export type SectionNames = (typeof navLinks)[number]['title'];
