// Type definitions for the portfolio website

/**
 * Configuration for project action buttons
 * Supports multiple button types with different styling and icons
 */
export interface ProjectButton {
  /** Text displayed on the button */
  label: string;
  /** URL the button links to */
  url: string;
  /** Visual style of the button */
  type: 'primary' | 'secondary' | 'outline';
  /** Optional icon to display before the label */
  icon?: 'github' | 'external' | 'demo' | 'download' | 'play';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  /** @deprecated Use buttons array instead */
  demoUrl?: string;
  /** @deprecated Use buttons array instead */
  githubUrl?: string;
  buttons?: ProjectButton[];
  featured: boolean;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'frameworks' | 'ai';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  keyAreas: string[]; // Renamed from technologies to be more generic
  type: 'internship' | 'training' | 'leadership';
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio?: string;
  resume?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  aboutSubtitle?: string;
  extendedBio?: string[];
  quickInfoTitle?: string;
  availabilityStatus?: string;
  skillsTitle?: string;
  educationBadge?: string;
  skillCategories?: {
    frontend: string;
    backend: string;
    frameworks: string;
    languages: string;
    tools: string;
    ai: string;
  };
  avatar: string;
  contact: Contact;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  major?: string;
  specialization?: string;
  location: string;
  startDate: string;
  endDate?: string;
  status?: 'completed' | 'in-progress' | 'expected';
  gpa?: string;
  gradeSystem?: string; // e.g., "4.0 scale", "1.0 scale (lowest)", etc.
  honors?: string; // e.g., "Magna Cum Laude", "Summa Cum Laude"
  achievements?: string[];
  relevantCoursework?: string[];
  thesis?: {
    title: string;
    description?: string;
    advisor?: string;
  };
  activities?: string[]; // Extra-curricular activities, organizations
  awards?: string[]; // Academic awards separate from achievements
  certifications?: {
    name: string;
    issuer: string;
    date?: string;
    url?: string;
  }[];
}
