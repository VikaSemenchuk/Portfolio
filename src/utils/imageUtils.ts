/**
 * Normalize image path to ensure proper loading
 */
export const normalizeImagePath = (src: string): string => {
  if (!src) return '';
  
  // If it's already a full URL, return as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If it starts with /, it's an absolute path from public folder
  if (src.startsWith('/')) {
    return src;
  }
  
  // Otherwise, assume it's a relative path and add leading slash
  return `/${src}`;
};

/**
 * Get default project image based on project ID
 */
export const getProjectImage = (projectId: string): string => {
  // Map project IDs to their default images
  const defaultImages: Record<string, string> = {
    'images': '/projects/images.png',
    'movies': '/projects/images.png',
    'news': '/projects/news.png',
    'pets': '/projects/pets.png',
    'gallery': '/projects/gallery.png',
    'weather': '/projects/weather.png',
    // Add more mappings as needed
  };
  
  return defaultImages[projectId] || '/projects/default.png';
};

/**
 * Create a placeholder image with project title
 */
export const createPlaceholderImage = (title: string): string => {
  // Simple canvas-based placeholder generation
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  canvas.width = 400;
  canvas.height = 250;
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 400, 250);
  gradient.addColorStop(0, '#6366f1');
  gradient.addColorStop(1, '#8b5cf6');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 250);
  
  // Text styling
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw title (truncated if too long)
  const maxLength = 20;
  const displayTitle = title.length > maxLength ? 
    title.substring(0, maxLength) + '...' : title;
  
  ctx.fillText(displayTitle, 200, 125);
  
  // Convert to data URL
  return canvas.toDataURL('image/png');
};

/**
 * Check if image exists by trying to load it
 */
export const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};