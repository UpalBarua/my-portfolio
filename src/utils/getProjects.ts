import path from 'path';
import { promises as fs } from 'fs';

export const getProjects = async () => {
  const filePath = path.join(process.cwd(), '/src/data');
  const projectsJson = await fs.readFile(filePath + '/projects.json', 'utf8');
  const { projects } = JSON.parse(projectsJson);

  return projects;
};
