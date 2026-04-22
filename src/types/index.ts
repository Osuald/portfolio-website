export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
  logoColor: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  availability: string;
  responseTime: string;
}

export type Theme = "light" | "dark";
