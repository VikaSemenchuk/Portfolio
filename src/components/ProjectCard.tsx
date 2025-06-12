import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { ProjectCardProps } from "@/types";
import { getProjectImage } from "@/utils";
import { OptimizedImage, TechStackDisplay } from "@/components";

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onDetailsClick,
  className = '',
  showActions = true
}) => {
  const { t: tCommon } = useTranslation('common');

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDetailsClick && project.hasDetails) {
      onDetailsClick(project);
    }
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projectImageSrc = project.image || getProjectImage(project.id);

  return (
    <Link 
      to={`/projects/${project.id}`} 
      className={`block group transform transition-transform duration-300 hover:-translate-y-2 ${className}`}
    >
      <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
        {/* Project image */}
        <div className="project-image-container">
          <OptimizedImage
            src={projectImageSrc}
            alt={`${project.title} preview`}
            title={project.title}
            className="project-image"
          />
          <div className="project-image-overlay">
            <div className="overlay-content">
              <FiExternalLink className="overlay-icon" />
              <span className="overlay-text">View Project</span>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="project-content">
          {/* Project header */}
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.role && (
              <div className="project-role">{project.role}</div>
            )}
          </div>

          {/* Technology stack  */}
          <div className="project-tech">
            <div className="project-tech-title">
              {tCommon("projectCard.techStack")}
            </div>
            <TechStackDisplay stack={project.stack} />
          </div>

          {/* Action buttons */}
          {showActions && (
            <div className="project-actions">
              <button
                onClick={(e) => handleExternalLink(e, project.link)}
                className="project-link project-link--secondary"
                title="View source code"
              >
                <FiGithub className="link-icon" />
                <span className="link-text">Code</span>
              </button>

              <div className="project-link project-link--primary project-link--disabled">
                <FiExternalLink className="link-icon" />
                <span className="link-text">Details</span>
              </div>

              {project.hasDetails && onDetailsClick && (
                <button
                  onClick={handleDetailsClick}
                  className="project-link project-link--accent"
                  title="Quick preview"
                >
                  <FiEye className="link-icon" />
                  <span className="link-text">Preview</span>
                </button>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;