import { Project } from './project';

export interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: 'grid' | 'slider';
  onDetailsClick?: (project: Project) => void;
  className?: string;
  showActions?: boolean;
}

export interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}