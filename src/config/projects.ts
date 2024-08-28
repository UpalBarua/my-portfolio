export const projects = [
  {
    links: {
      git: "https://github.com/upalbarua/thrivenvision",
      live: "https://www.thrivenvision.studio/",
    },
    description:
      '<p>This website was built for Thrivenvision, a company providing various digital services, using Next.js and other cutting-edge tools. Users can view service packages, request quotes, and schedule consultations, with admin access to consultation requests, dashboard management for adding portfolio posts, and modifying pricing packages.</p><ol><li>&nbsp;&nbsp;&nbsp;&nbsp;"Built using the latest Next.js app directory structure",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Utilized Firestore as the database and Firebase Storage for file storage",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Styled with Tailwind CSS and Next UI components",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Incorporated scroll animations using Framer Motion",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Utilized libraries like React Hook Form and Zod for form handling and validation",</li></ol><p><br></p>',
    images: [
      "/images/projects/thrivenvision-07.png",
      "/images/projects/thrivenvision-06.png",
      "/images/projects/thrivenvision-05.png",
      "/images/projects/thrivenvision-04.png",
      "/images/projects/thrivenvision-03.png",
      "/images/projects/thrivenvision-02.png",
      "/images/projects/thrivenvision-01.png",
      "/images/projects/thrivenvision-00.png",
    ],
    name: "Thrivenvision",
    title:
      "This website was built for Thrivenvision, a company providing various digital services.",
    techStack: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Framer Motion",
    ],
  },
  {
    links: {
      git: "https://github.com/upalbarua/scouts-poll",
      live: "https://scouts-poll.vercel.app/",
    },
    images: [
      "/images/projects/scouts-poll-05.png",
      "/images/projects/scouts-poll-04.png",
      "/images/projects/scouts-poll-03.png",
      "/images/projects/scouts-poll-02.png",
      "/images/projects/scouts-poll-01.png",
      "/images/projects/scouts-poll-00.png",
    ],
    description:
      '<p>Scouts Poll is a small voting app built with a team, allowing admins to create polls with text or image options, set timers, and view results via pie charts, while users can search through previous polls.</p><ol><li>&nbsp;&nbsp;&nbsp;&nbsp;"Collaborated with a team using Git branches, effectively resolving merge conflicts.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Created a responsive and accessible design using Tailwind CSS and Headless UI.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Implemented admin features for poll creation with options for text or image choices.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Added the ability for administrators to set poll expiration times.",</li></ol><p><br></p><p><br></p>',
    name: "Scouts Poll",
    title:
      "This website was built for Thrivenvision, a company providing various digital services.",
    techStack: ["React", "TailwindCSS", "Firebase", "Express.js", "MongoDB"],
  },
  {
    techStack: [
      "React",
      "Vanilla CSS",
      "Vite",
      "Firebase",
      "Express.js",
      "MongoDB",
    ],
    description:
      '<p>Scouts Poll is a small voting app built with a team, allowing admins to create polls with text or image options, set timers, and view results via pie charts, while users can search through previous polls.</p><ol><li>&nbsp;&nbsp;&nbsp;&nbsp;"Collaborated with a team using Git branches, effectively resolving merge conflicts.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Created a responsive and accessible design using Tailwind CSS and Headless UI.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Implemented admin features for poll creation with options for text or image choices.",</li><li>&nbsp;&nbsp;&nbsp;&nbsp;"Added the ability for administrators to set poll expiration times.",</li></ol><p><br></p>',
    name: "Savvy Pulse",
    title:
      "This website was built for Thrivenvision, a company providing various digital services.",
    links: {
      git: "https://github.com/UpalBarua/savvy-pulse-client",
      live: "https://savvy-pulse.web.app/",
    },
    images: [
      "/images/projects/savvy-pulse-07.png",
      "/images/projects/savvy-pulse-06.png",
      "/images/projects/savvy-pulse-05.png",
      "/images/projects/savvy-pulse-04.png",
      "/images/projects/savvy-pulse-03.png",
      "/images/projects/savvy-pulse-02.png",
      "/images/projects/savvy-pulse-01.png",
      "/images/projects/savvy-pulse-00.png",
    ],
  },
  {
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
    title:
      "This website was built for Thrivenvision, a company providing various digital services.",
    name: "Urban Mart",
    description:
      "Urban Mart is a practice project built with Next.js where users can search and sort groceries, add them to wishlist or cart, checkout with Stripe, and administrators manage products, orders, and users from the admin dashboard.",
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
] as const;
