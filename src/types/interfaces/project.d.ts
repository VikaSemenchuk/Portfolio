export interface ProjectStats {
  teamSize: string;
  endpoints: string;
  modules: string;
  filterParams: string;
  coverage: string;
}

export interface ProjectTechnologies {
  backend: string[];
  frontend: string[];
  architecture: string[];
  dataManagement: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectCodeExamples {
  aggregation: string;
  cloudinary: string;
  middleware: string;
}

export interface ProjectDetails {
  overview: string;
  myRole: string;
  technologies: ProjectTechnologies;
  features: ProjectFeature[];
  achievements: string[];
  stats: ProjectStats;
  codeExamples: ProjectCodeExamples;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  link: string;
  image?: string;
  featured?: boolean;
  role?: string;
  hasDetails: boolean;
  namespace: string;
  detailed?: ProjectDetails;
}