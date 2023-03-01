import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';

import { Title } from '../UI/Title/Title';
import { SkillCard } from '../SkillCard/SkillCard';
import styles from './Skills.module.scss';

const FRONTEND_SKILLS = [
  {
    id: 0,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 1,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 2,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 3,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 4,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 5,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 6,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 7,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 8,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 9,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 10,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 11,
    title: 'HTML',
    icon: <FaReact />,
  },
  {
    id: 12,
    title: 'HTML',
    icon: <FaReact />,
  },
];

const BACKEND_SKILLS = [
  {
    id: 0,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 1,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 2,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 4,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 5,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 6,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 7,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    id: 8,
    title: 'Node.js',
    icon: <FaNodeJs />,
  },
];

const TOOLS = [
  {
    id: 0,
    title: 'Linux',
    icon: <FaLinux />,
  },
  {
    id: 1,
    title: 'Linux',
    icon: <FaLinux />,
  },
  {
    id: 2,
    title: 'Linux',
    icon: <FaLinux />,
  },
  {
    id: 3,
    title: 'Linux',
    icon: <FaLinux />,
  },
  {
    id: 4,
    title: 'Linux',
    icon: <FaLinux />,
  },
  {
    id: 5,
    title: 'Linux',
    icon: <FaLinux />,
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
