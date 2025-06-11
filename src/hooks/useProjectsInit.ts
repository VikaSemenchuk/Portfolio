import { useEffect } from 'react';
import { useLanguageStore, useLoadProjects } from '@/store';

export const useProjectsInit = () => {
  const language = useLanguageStore(state => state.language);
  const loadProjects = useLoadProjects();

  useEffect(() => {
    loadProjects();
  }, [language, loadProjects]);
};

export default useProjectsInit;