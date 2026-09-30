export type NavTab = 
  | 'home'
  | 'about' 
  | 'skills' 
  | 'experience' 
  | 'projects' 
  | 'ai_vision' 
  | 'achievements' 
  | 'education' 
  | 'resume' 
  | 'contact';

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  institution: string;
  degree: string;
  specialization: string;
  cgpa: string;
  hscSchool: string;
  hscScore: string;
  linkedin?: string;
  github?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface TimelineItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  domain?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    highlight?: boolean;
  }[];
}

export type ProjectFilter = 'all' | 'uav_aero' | 'ai_cv' | 'cad' | 'iot_robotics';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectFilter;
  categoryLabel: string;
  badge: string;
  summary: string;
  fullDescription: string;
  areas?: string[];
  features?: string[];
  technologies: string[];
  hardware?: string[];
  applications?: string[];
  keyHighlights: string[];
  status?: string;
}

export interface CVProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  highlights: string[];
  detectionType: 'hand' | 'face' | 'crowd' | 'gesture' | 'canvas' | 'general';
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  level?: string;
  badgeText: string;
  iconType: 'space' | 'trophy' | 'rocket' | 'code' | 'plane' | 'cad' | 'users';
  description?: string;
  points: string[];
  organization?: string;
  hasGameDemo?: boolean;
}
