export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bioIntro: string;
  bioFull: string;
  location: string;
  permanentLocation: string;
  email: string;
  phone: string;
  website: string;
  degree: string;
  yearsOfExperience: string;
  avatarUrl: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface StoryPillar {
  title: string;
  quote: string;
  description: string;
  badge: string;
  icon: string;
}

export interface EthosStory {
  quote: string;
  storyTitle: string;
  personalStory: string;
  rootsAndHeritage: string;
  howIWork: {
    title: string;
    description: string;
  }[];
  pillars: StoryPillar[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Enterprise .NET' | 'Full Stack Web' | 'DevOps & Cloud' | 'AI & Streaming';
  period: string;
  client?: string;
  metrics: { label: string; value: string }[];
  overview: string;
  architectureStory: string;
  techStack: string[];
  features: string[];
  securityHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Internship' | 'Education';
  grade?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
}

export interface AchievementItem {
  title: string;
  rank: string;
  organizer: string;
  year: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: string;
  highlight?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}
