import fs from 'fs';
import matter from 'gray-matter';
import type { PostMetadata } from '@/types/types';

const getPostMetadata = (): PostMetadata[] => {
  const files = fs.readdirSync('src/data/posts');
  const mdFiles = files.filter((file) => file.endsWith('.md'));

  const posts = mdFiles.map((fileName) => {
    const fileContents = fs.readFileSync(`src/data/posts/${fileName}`, 'utf-8');

    const {
      data: { title, subtitle, date },
    } = matter(fileContents);

    return {
      title,
      subtitle,
      date,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostMetadata;
