import React from "react";

interface TechStackDisplayProps {
  stack: string;
  maxVisible?: number;
  showCount?: boolean;
}

const TechStackDisplay: React.FC<TechStackDisplayProps> = ({ 
  stack, 
  maxVisible = 4, 
  showCount = true 
}) => {
  const technologies = stack.split(', ');
  const visibleTech = technologies.slice(0, maxVisible);
  const hiddenCount = technologies.length - maxVisible;

  return (
    <div className="project-tech-list">
      {/* Visible technology tags */}
      {visibleTech.map((tech, index) => (
        <span key={index} className="tech-tag" title={tech}>
          {tech}
        </span>
      ))}
      
      {/* Overflow count indicator */}
      {showCount && hiddenCount > 0 && (
        <span 
          className="tech-tag tech-tag--count" 
          title={`${hiddenCount} more technologies: ${technologies.slice(maxVisible).join(', ')}`}
        >
          +{hiddenCount}
        </span>
      )}
    </div>
  );
};

export default TechStackDisplay;