import { AboutData } from './about';

export interface HeroData {
  title: string;
  subtitle: string;
  photoAlt: string;
}

export interface HomePageData {
  hero: HeroData;
}

export interface CollaborateData {
  title: string;
  description: string;
}

export interface ProjectsPageData {
  title: string;
  subtitle: string;
  projectNamespaces: string[];
  collaborate: CollaborateData;
}

export interface CareerPageData {
  title: string;
  content: string;
}

export interface PagesData {
  home: HomePageData;
  about: AboutData;
  projects: ProjectsPageData;
  career: CareerPageData;
}