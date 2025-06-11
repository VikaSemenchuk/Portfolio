import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import i18n from '@/i18n';
import { Project, ProjectDetails, ProjectsState } from '@/types';
import {PROJECT_NAMESPACES} from '@/constants'

const loadProjectFromNamespace = (namespace: string): Project | null => {
  try {
   const projectData = i18n.getResourceBundle(i18n.language, namespace)
    
    if (!projectData || typeof projectData !== 'object') {
      console.warn(`No data found for namespace: ${namespace}`);
      return null;
    }

    if (!projectData.id || !projectData.title || !projectData.description) {
      console.warn(`Missing required fields in namespace: ${namespace}`);
      return null;
    }

    const detailed: ProjectDetails | undefined = projectData.detailed 
      ? projectData.detailed 
      : undefined;

    return {
      id: projectData.id,
      title: projectData.title,
      description: projectData.description,
      stack: projectData.stack || '',
      link: projectData.link || '',
      image: projectData.image,
      featured: Boolean(projectData.featured),
      role: projectData.role,
      hasDetails: Boolean(detailed),
      namespace: namespace,
      detailed
    };
  } catch (error) {
    console.error(`Error loading project from namespace ${namespace}:`, error);
    return null;
  }
};


const loadAllProjects = (): Project[] => {
  try {
    // const projectNamespaces = i18n.t('pages:projects.projectNamespaces', { 
    //   returnObjects: true 
    // }) as string[];
    
    if (!Array.isArray(PROJECT_NAMESPACES)) {
      console.warn('Project namespaces not found or invalid format');
      return [];
    }
    
    return PROJECT_NAMESPACES
      .map(namespace => loadProjectFromNamespace(namespace))
      .filter((project): project is Project => project !== null);
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};

export const useProjectsStore = create<ProjectsState>()(
  devtools(
    (set, get) => ({
      projects: [],
      isLoading: false,
      error: null,

      loadProjects: () => {
        set({ isLoading: true, error: null });
        
        try {
          const projects = loadAllProjects();
          set({ 
            projects, 
            isLoading: false,
            error: null 
          });
        } catch (error) {
          set({ 
            isLoading: false, 
            error: error instanceof Error ? error.message : 'Failed to load projects' 
          });
        }
      },

      getProjectById: (id: string) => {
        const { projects } = get();
        return projects.find(project => project.id === id) || null;
      },

      getFeaturedProjects: () => {
        const { projects } = get();
        return projects.filter(project => project.featured);
      },

      getProjectsWithDetails: () => {
        const { projects } = get();
        return projects.filter(project => project.hasDetails && project.detailed);
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'projects-store',
    }
  )
);

// Selectors
export const useProjects = () => useProjectsStore(state => state.projects);
export const useProjectsLoading = () => useProjectsStore(state => state.isLoading);
export const useProjectsError = () => useProjectsStore(state => state.error);

// hooks for actions
export const useLoadProjects = () => useProjectsStore(state => state.loadProjects);
export const useGetProjectById = () => useProjectsStore(state => state.getProjectById);
export const useGetFeaturedProjects = () => useProjectsStore(state => state.getFeaturedProjects);
export const useGetProjectsWithDetails = () => useProjectsStore(state => state.getProjectsWithDetails);
export const useClearProjectsError = () => useProjectsStore(state => state.clearError);