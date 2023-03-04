interface IProject {
  id: number;
  image: string;
  title: string;
  description: {
    short: string;
    long: string;
  };
  techStack: string[];
  links: {
    live: string;
    git: string;
  };
}
