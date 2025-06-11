export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export interface Education {
  program: string;
  institution: string;
  dates: string;
}

export interface Skills {
  techTitle: string;
  technical: string[];
  softTitle: string;
  soft: string[];
  languagesTitle: string;
  languages: string[];
}

export interface AboutData {
  name: string;
  title: string;
  intro: string;
  contacts: ContactInfo;
  skills: Skills;
  educationTitle: string;
  education: Education[];
}