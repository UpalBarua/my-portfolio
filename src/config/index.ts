import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
] as const;

export const skillsList = [
  {
    name: "HTML",
    iconUrl: "html5.png",
  },
  {
    name: "CSS",
    iconUrl: "css3.png",
  },
  {
    name: "SASS",
    iconUrl: "sass.png",
  },
  {
    name: "Bootstrap",
    iconUrl: "bootstrap-5.png",
  },
  {
    name: "Tailwind",
    iconUrl: "tailwind.png",
  },
  {
    name: "ChakraUI",
    iconUrl: "chakra-ui.png",
  },
  {
    name: "Framer Motion",
    iconUrl: "framer-motion.svg",
  },
  {
    name: "JavaScript",
    iconUrl: "javascript.png",
  },
  {
    name: "TypeScript",
    iconUrl: "typescript.png",
  },
  {
    name: "React",
    iconUrl: "react.png",
  },
  {
    name: "Next.js",
    iconUrl: "next-js.png",
  },
  {
    name: "Redux",
    iconUrl: "redux.svg",
  },
  {
    name: "Node.js",
    iconUrl: "node-js.png",
  },
  {
    name: "Firebase",
    iconUrl: "firebase.png",
  },
  {
    name: "Express.js",
    iconUrl: "express-js.png",
  },
  {
    name: "MongoDB",
    iconUrl: "mongodb.png",
  },
  {
    name: "Python",
    iconUrl: "python.png",
  },
  {
    name: "Linux",
    iconUrl: "linux.png",
  },
  {
    name: "Bash",
    iconUrl: "bash.png",
  },
  {
    name: "Figma",
    iconUrl: "figma.png",
  },
  {
    name: "Git",
    iconUrl: "git.png",
  },
  {
    name: "Vim",
    iconUrl: "vim.png",
  },
] as const;

export const contactLinks = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/upalbarua",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/upalb",
  },
  {
    icon: IconMail,
    href: "mailto:upalbarua52@gmail.com",
  },
  {
    icon: IconPhone,
    href: "tel:+8801789215725",
  },
] as const;
