export const navLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Skills',
    link: '/#skills',
  },
  {
    title: 'Projects',
    link: '/#projects',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
] as const;

export const footerLinks = [
  {
    href: '/',
    label: 'Home',
    target: '',
  },
  {
    href: 'https://github.com/upalbarua',
    label: 'GitHub',
    target: '_blank',
  },
  {
    href: 'https://www.linkedin.com/in/upalb',
    label: 'Linkedin',
    target: '_blank',
  },
  {
    href: '/contact',
    label: 'Contact',
    target: '',
  },
] as const;

export const skillsList = [
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
    icon: 'bootstrap-5.png',
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
    icon: 'next-js.png',
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
] as const;

export const projects = [
  {
    id: 'savvy-pulse',
    images: [
      '/images/projects/savvy-pulse-00.png',
      '/images/projects/savvy-pulse-01.png',
      '/images/projects/savvy-pulse-02.png',
      '/images/projects/savvy-pulse-03.png',
      '/images/projects/savvy-pulse-04.png',
      '/images/projects/savvy-pulse-05.png',
      '/images/projects/savvy-pulse-06.png',
      '/images/projects/savvy-pulse-07.png',
    ],
    title: 'Savvy Pulse',
    description: {
      short:
        'Savvy Pulse is an online marketplace connecting worldwide buyers and sellers of high-quality second-hand guitars. With detailed listings and wish lists, we help guitar enthusiasts find their perfect match.',
      long: "Introducing Savvy Pulse, the ultimate online marketplace for buying and selling high-quality, second-hand guitars. Our platform connects buyers and sellers from all around the world, creating a seamless and secure experience for guitar enthusiasts of all levels. As a seller, you can easily post ads for your guitars, with the ability to upload images and detailed descriptions of your instrument. Our platform is designed to make it easy for you to showcase your guitar's unique features and set a fair price. As a buyer, you can easily create a wish list of guitars you're interested in. At Savvy Pulse, we're committed to providing a user-friendly and transparent platform that connects guitar enthusiasts around the world. Join our community today and discover the perfect guitar for your playing style and budget.",
      features: [
        'No CSS framework or library used.',
        'Navbar and modal were created from scratch.',
        'Fully responsive for mobile and tablet devices.',
        'Wishlist functionality was implemented.',
        'Two custom hooks were used.',
      ],
    },
    techStack: [
      'React',
      'Vanilla CSS',
      'Vite',
      'Firebase',
      'Express.js',
      'MongoDB',
    ],
    links: {
      live: 'https://savvy-pulse.web.app/',
      git: 'https://github.com/UpalBarua/savvy-pulse-client',
    },
  },
  {
    id: 'code-sage',
    images: [
      '/images/projects/code-sage-00.png',
      '/images/projects/code-sage-01.png',
      '/images/projects/code-sage-02.png',
      '/images/projects/code-sage-03.png',
      '/images/projects/code-sage-04.png',
      '/images/projects/code-sage-05.png',
      '/images/projects/code-sage-06.png',
    ],
    title: 'Code Sage',
    description: {
      short:
        'CodeSage is an online learning platform for programming and web development, with courses covering core technologies and programming languages. Our experienced instructors provide engaging content with hands-on exercises to help users master in-demand skills and advance their careers.',
      long: "Introducing CodeSage, the online learning platform for programming and web development enthusiasts. Our platform offers a comprehensive range of courses covering core web development technologies, designed to help users master in-demand skills and advance their careers. At CodeSage, we offer both dark and light modes to suit your preferences. Our platform is designed to make learning convenient. As a user, you can easily log in and purchase courses that align with your interests and skill level. Our courses cover topics such as HTML, CSS, JavaScript, and popular web development frameworks like React. We also offer courses on programming languages like Python, Java, and more. Our team of experienced instructors is committed to providing engaging and informative content, with hands-on exercises and projects that reinforce your learning. Join our community of learners and unlock your full potential with CodeSage. With our platform, you can gain the skills and knowledge you need to succeed in today's fast-paced tech industry.",
      features: [
        'Fully responsive for mobile and tablet devices.',
        'Navbar, Sidebar and loading spinner were created from scratch.',
        'Form validation was implemented from scratch.',
        'Dark mode is fully functional.',
        'React portals was used.',
      ],
    },
    techStack: [
      'React',
      'Vanilla CSS',
      'Typescript',
      'Vite',
      'Firebase',
      'Express.js',
    ],
    links: {
      live: 'https://codesage-bd5cf.web.app/',
      git: 'https://github.com/UpalBarua/code-sage-client',
    },
  },
  {
    id: 'quick-quiz',
    images: [
      '/images/projects/quick-quiz-00.png',
      '/images/projects/quick-quiz-01.png',
      '/images/projects/quick-quiz-02.png',
      '/images/projects/quick-quiz-03.png',
      '/images/projects/quick-quiz-04.png',
      '/images/projects/quick-quiz-05.png',
    ],
    title: 'Quick Quiz',
    description: {
      short:
        'Quick Quiz is an online platform offering quizzes on web development topics such as HTML, CSS, JavaScript, and React. It caters to beginners and experienced developers and provides interview practice. The quizzes are engaging and challenging, aiming to make learning fun while improving skills. Join now to take your skills to the next level.',
      long: "Introducing Quick Quiz, the ultimate platform for web development enthusiasts to test their knowledge and skills. Our website offers a range of quizzes on HTML, CSS, JavaScript, React, and more, designed to help you improve your understanding of core web development topics. Whether you're a beginner or an experienced developer, Quick Quiz has something for everyone. With our platform, you can also practice interview questions and prepare for technical interviews, giving you a competitive edge in the job market. Our quizzes are designed to be engaging and challenging, with questions that cover a wide range of topics and difficulty levels. Our aim is to make learning fun and interactive, so you can improve your knowledge and skills in web development while enjoying the process. Join our community of learners today and take your web development skills to the next level with Quick Quiz!",
      features: [
        'Responsive navbar and toast notifications were created from scratch.',
        'Quiz forms get disabled after submitting answer.',
        'A bar at the bottom shows how many answered questions are correct or wrong.',
      ],
    },
    techStack: ['React', 'Vanilla CSS', 'Vite'],
    links: {
      live: 'https://rad-custard-83f4fd.netlify.app/',
      git: 'https://github.com/UpalBarua/quick-quiz',
    },
  },
] as const;
