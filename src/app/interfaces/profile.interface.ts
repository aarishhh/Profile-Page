export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Language' | 'Design';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  gradient: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  status?: 'completed' | 'ongoing';
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
  certificates: Certificate[];
  education: Education[];
}
