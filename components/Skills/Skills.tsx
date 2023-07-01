import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SkillCard } from '../SkillCard/SkillCard';
import { Title } from '../UI/Title/Title';
import styles from './Skills.module.scss';

const FRONTEND_SKILLS = [
  {
    id: 0,
    title: 'HTML',
    icon: 'html5.png',
  },
  {
    id: 1,
    title: 'CSS',
    icon: 'css3.png',
  },
  {
    id: 2,
    title: 'SASS',
    icon: 'sass.png',
  },
  {
    id: 3,
    title: 'Bootstrap',
    icon: 'bootstrap.png',
  },
  {
    id: 4,
    title: 'Tailwind',
    icon: 'tailwind.png',
  },
  {
    id: 5,
    title: 'ChakraUI',
    icon: 'chakra-ui.png',
  },
  {
    id: 6,
    title: 'JavaScript',
    icon: 'javascript.png',
  },
  {
    id: 9,
    title: 'TypeScript',
    icon: 'typescript.png',
  },
  {
    id: 7,
    title: 'React',
    icon: 'react.png',
  },
  {
    id: 8,
    title: 'Next.js',
    icon: 'next.js.png',
  },
];

const BACKEND_SKILLS = [
  {
    id: 0,
    title: 'Node.js',
    icon: 'node-js.png',
  },
  {
    id: 1,
    title: 'Firebase',
    icon: 'firebase.png',
  },
  {
    id: 2,
    title: 'Express.js',
    icon: 'express-js.png',
  },
  {
    id: 3,
    title: 'MongoDB',
    icon: 'mongodb.png',
  },
  {
    id: 4,
    title: 'Python',
    icon: 'python.png',
  },
];

const TOOLS = [
  {
    id: 0,
    title: 'Linux',
    icon: 'linux.png',
  },
  {
    id: 1,
    title: 'Bash',
    icon: 'bash.png',
  },
  {
    id: 2,
    title: 'Figma',
    icon: 'figma.png',
  },
  {
    id: 3,
    title: 'VSCode',
    icon: 'vscode.png',
  },
  {
    id: 4,
    title: 'Git',
    icon: 'git.png',
  },
  {
    id: 5,
    title: 'Vim',
    icon: 'vim.png',
  },
];

export const Skills: FC = () => {
  return (
    <section className={styles.Skills}>
      <Title>My Skills</Title>
      <Tabs className={styles.Tabs}>
        <TabList className={styles.TabList}>
          {['Frontend', 'Backend', 'Tools'].map((category, index) => (
            <Tab
              key={index}
              className={styles.Tab}
              selectedClassName={styles.active}>
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanel className={styles.TabPanel}>
          {FRONTEND_SKILLS.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          {BACKEND_SKILLS.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          {TOOLS.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};
