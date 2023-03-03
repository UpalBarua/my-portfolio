import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';

import { Title } from '../UI/Title/Title';
import { SkillCard } from '../SkillCard/SkillCard';
import styles from './Skills.module.scss';
import { BsBootstrapFill } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';

import {
  SiChakraui,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const FRONTEND_SKILLS = [
  {
    id: 0,
    title: 'HTML',
    // icon: <FaHtml5 />,
    icon: 'html5.png',
  },
  {
    id: 1,
    title: 'CSS',
    // icon: <FaCss3Alt />,
    icon: 'css3.png',
  },
  {
    id: 2,
    title: 'SASS',
    // icon: <FaSass />,
    icon: 'sass.png',
  },
  {
    id: 3,
    title: 'Bootstrap',
    // icon: <FaBootstrap />,
    icon: 'bootstrap.png',
  },
  {
    id: 4,
    title: 'Tailwind',
    // icon: <SiTailwindcss />,
    icon: 'tailwind.png',
  },
  {
    id: 5,
    title: 'ChakraUI',
    // icon: <SiChakraui />,
    icon: 'chakra-ui.png',
  },
  {
    id: 6,
    title: 'JavaScript',
    // icon: <SiJavascript />,
    icon: 'javascript.png',
  },
  {
    id: 9,
    title: 'TypeScript',
    // icon: <SiTypescript />,
    icon: 'typescript.png',
  },
  {
    id: 7,
    title: 'React',
    // icon: <FaReact />,
    icon: 'react.png',
  },
  {
    id: 8,
    title: 'Next.js',
    // icon: <TbBrandNextjs />,
    icon: 'next.js.png',
  },
];

const BACKEND_SKILLS = [
  {
    id: 0,
    title: 'Node.js',
    // icon: <FaNodeJs />,
    icon: 'node-js.png',
  },
  {
    id: 1,
    title: 'Firebase',
    // icon: <FaNodeJs />,
    icon: 'firebase.png',
  },
  {
    id: 2,
    title: 'Express.js',
    // icon: <FaNodeJs />,
    icon: 'express-js.png',
  },
  {
    id: 3,
    title: 'MongoDB',
    // icon: <FaNodeJs />,
    icon: 'mongodb.png',
  },
  {
    id: 4,
    title: 'Python',
    // icon: <FaNodeJs />,
    icon: 'python.png',
  },
];

const TOOLS = [
  {
    id: 0,
    title: 'Linux',
    // icon: <FaLinux />,
    icon: 'linux.png',
  },
  {
    id: 1,
    title: 'Bash',
    // icon: <FaLinux />,
    icon: 'bash.png',
  },
  {
    id: 2,
    title: 'Figma',
    // icon: <FaLinux />,
    icon: 'figma.png',
  },
  {
    id: 3,
    title: 'VSCode',
    // icon: <FaLinux />,
    icon: 'vscode.png',
  },
  {
    id: 4,
    title: 'Git',
    // icon: <FaLinux />,
    icon: 'git.png',
  },
  {
    id: 5,
    title: 'Vim',
    // icon: <FaLinux />,
    icon: 'vim.png',
  },
];

export const Skills = () => {
  return (
    <section className={styles.Skills}>
      <Title>My Skills</Title>

      <Tabs className={styles.Tabs}>
        <TabList className={styles.TabList}>
          {['Frontend', 'Backend', 'tools'].map((category, index) => (
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
