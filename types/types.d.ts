interface IProject {
  id: string;
  images: string[];
  title: string;
  description: {
    short: string;
    long: string;
    features: string[];
  };
  techStack: string[];
  links: {
    live: string;
    git: string;
  };
}
