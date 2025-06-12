import React, { useState } from "react";
import { FiCode } from "react-icons/fi";
import { normalizeImagePath, createPlaceholderImage } from "@/utils/imageUtils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  title = "" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [fallbackSrc, setFallbackSrc] = useState<string>('');

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.warn(`Failed to load image: ${src}`);
    setImageError(true);
    setImageLoaded(true);
    
    // Try to generate fallback if title provided
    if (title) {
      const placeholderSrc = createPlaceholderImage(title);
      setFallbackSrc(placeholderSrc);
    }
  };

  const normalizedSrc = normalizeImagePath(src);

  // Show placeholder if image failed and no fallback
  if (imageError && !fallbackSrc) {
    return (
      <div className="project-image-placeholder">
        <FiCode className="placeholder-icon" />
        <span className="placeholder-text">Project Preview</span>
      </div>
    );
  }

  return (
    <>
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="project-image-skeleton">
          <div className="skeleton-animation"></div>
        </div>
      )}
      
      {/* Main image */}
      <img
        src={imageError && fallbackSrc ? fallbackSrc : normalizedSrc}
        alt={alt}
        className={`${className} ${imageLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
      />
    </>
  );
};

export default OptimizedImage;