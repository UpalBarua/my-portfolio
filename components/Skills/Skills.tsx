import { SkillCard } from '../SkillCard/SkillCard';
import { Title } from '../UI/Title/Title';
import styles from './Skills.module.scss';

const SKILLS = [
  {
    title: 'HTML',
    icon: 'html5.png',
  },
  {
    title: 'CSS',
    icon: 'css3.png',
  },
  {
    title: 'SASS',
    icon: 'sass.png',
  },
  {
    title: 'Bootstrap',
    icon: 'bootstrap.png',
  },
  {
    title: 'Tailwind',
    icon: 'tailwind.png',
  },
  {
    title: 'ChakraUI',
    icon: 'chakra-ui.png',
  },
  {
    title: 'JavaScript',
    icon: 'javascript.png',
  },
  {
    title: 'TypeScript',
    icon: 'typescript.png',
  },
  {
    title: 'React',
    icon: 'react.png',
  },
  {
    title: 'Next.js',
    icon: 'next.js.png',
  },
  {
    title: 'Node.js',
    icon: 'node-js.png',
  },
  {
    title: 'Firebase',
    icon: 'firebase.png',
  },
  {
    title: 'Express.js',
    icon: 'express-js.png',
  },
  {
    title: 'MongoDB',
    icon: 'mongodb.png',
  },
  {
    title: 'Python',
    icon: 'python.png',
  },
  {
    title: 'Linux',
    icon: 'linux.png',
  },
  {
    title: 'Bash',
    icon: 'bash.png',
  },
  {
    title: 'Figma',
    icon: 'figma.png',
  },
  {
    title: 'VSCode',
    icon: 'vscode.png',
  },
  {
    title: 'Git',
    icon: 'git.png',
  },
  {
    title: 'Vim',
    icon: 'vim.png',
  },
];

export const Skills = () => {
  return (
    <section className={styles.Skills}>
      <Title>My Skills</Title>
      <div className={styles.SkillsContainer}>
        {SKILLS.map((skill) => (
          <SkillCard key={skill.icon} {...skill} />
        ))}
      </div>
    </section>
  );
};
