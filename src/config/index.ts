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

export const footerLinks = [
  {
    href: "/",
    label: "Home",
    target: "",
  },
  {
    href: "https://github.com/upalbarua",
    label: "GitHub",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/in/upalb",
    label: "Linkedin",
    target: "_blank",
  },
  {
    href: "/contact",
    label: "Contact",
    target: "",
  },
] as const;

export const skillsList = [
  {
    title: "HTML",
    icon: "html5.png",
  },
  {
    title: "CSS",
    icon: "css3.png",
  },
  {
    title: "SASS",
    icon: "sass.png",
  },
  {
    title: "Bootstrap",
    icon: "bootstrap-5.png",
  },
  {
    title: "Tailwind",
    icon: "tailwind.png",
  },
  {
    title: "ChakraUI",
    icon: "chakra-ui.png",
  },
  {
    title: "Framer Motion",
    icon: "framer-motion.svg",
  },
  {
    title: "JavaScript",
    icon: "javascript.png",
  },
  {
    title: "TypeScript",
    icon: "typescript.png",
  },
  {
    title: "React",
    icon: "react.png",
  },
  {
    title: "Next.js",
    icon: "next-js.png",
  },
  {
    title: "Redux",
    icon: "redux.svg",
  },
  {
    title: "Node.js",
    icon: "node-js.png",
  },
  {
    title: "Firebase",
    icon: "firebase.png",
  },
  {
    title: "Express.js",
    icon: "express-js.png",
  },
  {
    title: "MongoDB",
    icon: "mongodb.png",
  },
  {
    title: "Python",
    icon: "python.png",
  },
  {
    title: "Linux",
    icon: "linux.png",
  },
  {
    title: "Bash",
    icon: "bash.png",
  },
  {
    title: "Figma",
    icon: "figma.png",
  },
  {
    title: "Git",
    icon: "git.png",
  },
  {
    title: "Vim",
    icon: "vim.png",
  },
] as const;

export const projects = [
  {
    id: "thrivenvision",
    images: [
      "/images/projects/thrivenvision-00.png",
      "/images/projects/thrivenvision-01.png",
      "/images/projects/thrivenvision-02.png",
      "/images/projects/thrivenvision-03.png",
      "/images/projects/thrivenvision-04.png",
      "/images/projects/thrivenvision-05.png",
      "/images/projects/thrivenvision-06.png",
      "/images/projects/thrivenvision-07.png",
    ],
    title: "Thrivenvision",
    description: {
      short:
        "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
      long: "This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.",
      features: [
        "Built using the latest Next.js app directory structure",
        "Utilized Firestore as the database and Firebase Storage for file storage",
        "Styled with Tailwind CSS and Next UI components",
        "Incorporated scroll animations using Framer Motion",
        "Utilized libraries like React Hook Form and Zod for form handling and validation",
      ],
    },
    techStack: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Framer Motion",
    ],
    links: {
      live: "https://www.thrivenvision.studio/",
      git: "https://github.com/upalbarua/thrivenvision",
    },
  },
  {
    id: "urban-mart",
    images: [
      "/images/projects/urban-mart-00.png",
      "/images/projects/urban-mart-01.png",
      "/images/projects/urban-mart-02.png",
      "/images/projects/urban-mart-03.png",
      "/images/projects/urban-mart-04.png",
      "/images/projects/urban-mart-05.png",
      "/images/projects/urban-mart-06.png",
      "/images/projects/urban-mart-07.png",
    ],
    title: "Urban Mart",
    description: {
      short:
        "Urban Mart is a practice project built with Next.js where users can search and sort groceries, add them to wishlist or cart, checkout with Stripe, and administrators manage products, orders, and users from the admin dashboard.",
      long: "Urban Mart is a practice project built with Next.js where users can search and sort groceries, add them to wishlist or cart, checkout with Stripe, and administrators manage products, orders, and users from the admin dashboard.",
      features: [
        "Developed a responsive, accessible UI with dark mode using Tailwind CSS and Shadcn UI.",
        "Implemented wishlist and cart features with React-Query's optimistic updates.",
        "Ensured type safety by using TypeScript and Zod on both client and server sides.",
        "Integrated Stripe payment method for transactions.",
        "Made an Admin Dashboard for product and order management.",
      ],
    },
    techStack: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Exprees",
      "Mongoose",
    ],
    links: {
      live: "https://urban-mart.vercel.app/",
      git: "https://github.com/UpalBarua/urban-mart",
    },
  },
  {
    id: "savvy-pulse",
    images: [
      "/images/projects/savvy-pulse-00.png",
      "/images/projects/savvy-pulse-01.png",
      "/images/projects/savvy-pulse-02.png",
      "/images/projects/savvy-pulse-03.png",
      "/images/projects/savvy-pulse-04.png",
      "/images/projects/savvy-pulse-05.png",
      "/images/projects/savvy-pulse-06.png",
      "/images/projects/savvy-pulse-07.png",
    ],
    title: "Savvy Pulse",
    description: {
      short:
        "Savvy Pulse is an online marketplace connecting worldwide buyers and sellers of high-quality second-hand guitars. With detailed listings and wish lists, we help guitar enthusiasts find their perfect match.",
      long: "Introducing Savvy Pulse, the ultimate online marketplace for buying and selling high-quality, second-hand guitars. Our platform connects buyers and sellers from all around the world, creating a seamless and secure experience for guitar enthusiasts of all levels. As a seller, you can easily post ads for your guitars, with the ability to upload images and detailed descriptions of your instrument. Our platform is designed to make it easy for you to showcase your guitar's unique features and set a fair price. As a buyer, you can easily create a wish list of guitars you're interested in. At Savvy Pulse, we're committed to providing a user-friendly and transparent platform that connects guitar enthusiasts around the world. Join our community today and discover the perfect guitar for your playing style and budget.",
      features: [
        "No CSS framework or library used.",
        "Navbar and modal were created from scratch.",
        "Fully responsive for mobile and tablet devices.",
        "Wishlist functionality was implemented.",
        "Two custom hooks were used.",
      ],
    },
    techStack: [
      "React",
      "Vanilla CSS",
      "Vite",
      "Firebase",
      "Express.js",
      "MongoDB",
    ],
    links: {
      live: "https://savvy-pulse.web.app/",
      git: "https://github.com/UpalBarua/savvy-pulse-client",
    },
  },
  {
    id: "scouts-poll",
    images: [
      "/images/projects/scouts-poll-00.png",
      "/images/projects/scouts-poll-01.png",
      "/images/projects/scouts-poll-02.png",
      "/images/projects/scouts-poll-03.png",
      "/images/projects/scouts-poll-04.png",
      "/images/projects/scouts-poll-05.png",
    ],
    title: "Scouts Poll",
    description: {
      short:
        "Scouts Poll is a small voting app built with a team, allowing admins to create polls with text or image options, set timers, and view results via pie charts, while users can search through previous polls.",
      long: "Scouts Poll is a small voting app built with a team, allowing admins to create polls with text or image options, set timers, and view results via pie charts, while users can search through previous polls.",
      features: [
        "Collaborated with a team using Git branches, effectively resolving merge conflicts.",
        "Created a responsive and accessible design using Tailwind CSS and Headless UI.",
        "Implemented admin features for poll creation with options for text or image choices.",
        "Added the ability for administrators to set poll expiration times.",
      ],
    },
    techStack: ["React", "TailwindCSS", "Firebase", "Express.js", "MongoDB"],
    links: {
      live: "https://scouts-poll.vercel.app/",
      git: "https://github.com/upalbarua/scouts-poll",
    },
  },
  // {
  //   id: "code-sage",
  //   images: [
  //     "/images/projects/code-sage-00.png",
  //     "/images/projects/code-sage-01.png",
  //     "/images/projects/code-sage-02.png",
  //     "/images/projects/code-sage-03.png",
  //     "/images/projects/code-sage-04.png",
  //     "/images/projects/code-sage-05.png",
  //     "/images/projects/code-sage-06.png",
  //   ],
  //   title: "Code Sage",
  //   description: {
  //     short:
  //       "CodeSage is an online learning platform for programming and web development, with courses covering core technologies and programming languages. Our experienced instructors provide engaging content with hands-on exercises to help users master in-demand skills and advance their careers.",
  //     long: "Introducing CodeSage, the online learning platform for programming and web development enthusiasts. Our platform offers a comprehensive range of courses covering core web development technologies, designed to help users master in-demand skills and advance their careers. At CodeSage, we offer both dark and light modes to suit your preferences. Our platform is designed to make learning convenient. As a user, you can easily log in and purchase courses that align with your interests and skill level. Our courses cover topics such as HTML, CSS, JavaScript, and popular web development frameworks like React. We also offer courses on programming languages like Python, Java, and more. Our team of experienced instructors is committed to providing engaging and informative content, with hands-on exercises and projects that reinforce your learning. Join our community of learners and unlock your full potential with CodeSage. With our platform, you can gain the skills and knowledge you need to succeed in today's fast-paced tech industry.",
  //     features: [
  //       "Fully responsive for mobile and tablet devices.",
  //       "Navbar, Sidebar and loading spinner were created from scratch.",
  //       "Form validation was implemented from scratch.",
  //       "Dark mode is fully functional.",
  //       "React portals was used.",
  //     ],
  //   },
  //   techStack: [
  //     "React",
  //     "Vanilla CSS",
  //     "Typescript",
  //     "Vite",
  //     "Firebase",
  //     "Express.js",
  //   ],
  //   links: {
  //     live: "https://codesage-bd5cf.web.app/",
  //     git: "https://github.com/UpalBarua/code-sage-client",
  //   },
  // },
  // {
  //   id: "quick-quiz",
  //   images: [
  //     "/images/projects/quick-quiz-00.png",
  //     "/images/projects/quick-quiz-01.png",
  //     "/images/projects/quick-quiz-02.png",
  //     "/images/projects/quick-quiz-03.png",
  //     "/images/projects/quick-quiz-04.png",
  //     "/images/projects/quick-quiz-05.png",
  //   ],
  //   title: "Quick Quiz",
  //   description: {
  //     short:
  //       "Quick Quiz is an online platform offering quizzes on web development topics such as HTML, CSS, JavaScript, and React. It caters to beginners and experienced developers and provides interview practice. The quizzes are engaging and challenging, aiming to make learning fun while improving skills. Join now to take your skills to the next level.",
  //     long: "Introducing Quick Quiz, the ultimate platform for web development enthusiasts to test their knowledge and skills. Our website offers a range of quizzes on HTML, CSS, JavaScript, React, and more, designed to help you improve your understanding of core web development topics. Whether you're a beginner or an experienced developer, Quick Quiz has something for everyone. With our platform, you can also practice interview questions and prepare for technical interviews, giving you a competitive edge in the job market. Our quizzes are designed to be engaging and challenging, with questions that cover a wide range of topics and difficulty levels. Our aim is to make learning fun and interactive, so you can improve your knowledge and skills in web development while enjoying the process. Join our community of learners today and take your web development skills to the next level with Quick Quiz!",
  //     features: [
  //       "Responsive navbar and toast notifications were created from scratch.",
  //       "Quiz forms get disabled after submitting answer.",
  //       "A bar at the bottom shows how many answered questions are correct or wrong.",
  //     ],
  //   },
  //   techStack: ["React", "Vanilla CSS", "Vite"],
  //   links: {
  //     live: "https://rad-custard-83f4fd.netlify.app/",
  //     git: "https://github.com/UpalBarua/quick-quiz",
  //   },
  // },
] as const;
