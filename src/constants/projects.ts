export const PROJECT_NAMESPACES = [
  'petsProject',
  'newsProject', 
  'imagesProject',
  'moviesProject'
] as const;

export type ProjectNamespace = typeof PROJECT_NAMESPACES[number];