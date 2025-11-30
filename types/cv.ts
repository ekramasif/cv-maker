export interface PersonalInfo {
  fullName: string;
  rollNo?: string;
  program?: string;
  institute?: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  logo?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export const initialCVData: CVData = {
  personalInfo: {
    fullName: '',
    rollNo: '',
    program: '',
    institute: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
    logo: '',
    summary: '',
  },
  experiences: [],
  education: [],
  skills: [],
  projects: [],
};
