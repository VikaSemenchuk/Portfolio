import { Project } from './project';

export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  loadProjects: () => void;
  getProjectById: (id: string) => Project | null;
  getFeaturedProjects: () => Project[];
  getProjectsWithDetails: () => Project[];
  clearError: () => void;
}