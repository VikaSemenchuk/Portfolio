import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub, FiAward, FiEye } from "react-icons/fi";

import { ProjectCardProps } from "@/types";

const ProjectCard = ({
    project,
    index = 0,
    variant = 'grid',
    onDetailsClick,
    className = '',
    showActions = true
}: ProjectCardProps) => {
    const { t: tCommon } = useTranslation('common');

    const handleDetailsClick = () => {
        if (onDetailsClick && project.hasDetails) {
            onDetailsClick(project);
        }
    };

    if (variant === 'slider') {
        return (
            <Link
                to={`/projects/${project.id}`}
                className="underline hover:text-accent transition-colors"
            >
                <div className={`project-card--slider ${className}`}>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg mb-4">{project.description}</p>

                    {project.role && (
                        <p className="text-sm text-accent font-medium mb-4">
                            {tCommon("projectCard.role")} {project.role}
                        </p>
                    )}

                    <p className="text-sm italic text-text-secondary mb-6">
                        {project.stack}
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-accent transition-colors"
                        >
                            GitHub →
                        </a>

                        <Link
                            to={`/projects/${project.id}`}
                            className="underline hover:text-accent transition-colors"
                        >
                            {tCommon("buttons.viewDetails")} →
                        </Link>

                        {project.hasDetails && onDetailsClick && (
                            <button
                                onClick={handleDetailsClick}
                                className="underline hover:text-accent transition-colors"
                            >
                                Quick View →
                            </button>
                        )}
                    </div>
                </div>
            </Link>

        );
    }

    // Grid 
    return (
        <Link
            to={`/projects/${project.id}`}
            className="underline hover:text-accent transition-colors"
        >
            <div
                className={`project-card ${project.featured ? 'project-card--featured' : ''} ${className}`}
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {/* Featured Badge */}
                {project.featured && (
                    <div className="featured-badge">
                        <FiAward className="h-3 w-3" />
                        <span>{tCommon("projectCard.featured")}</span>
                    </div>
                )}

                {/* Image */}
                <div className="project-image-container">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                    ) : (
                        <div className="project-image-placeholder">
                            🚀
                        </div>
                    )}
                    <div className="project-image-overlay" />
                </div>

                {/* Content */}
                <div className="project-content">
                    {/* Header */}
                    <div className="project-header">
                        <h3 className="project-title">
                            {project.title}
                        </h3>
                        {project.role && (
                            <div className="project-role">
                                {project.role}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="project-description">
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="project-tech">
                        <div className="project-tech-title">
                            {tCommon("projectCard.techStack")}
                        </div>
                        <div className="project-tech-list">
                            {project.stack.split(', ').slice(0, 4).map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                            {project.stack.split(', ').length > 4 && (
                                <span className="tech-tag">
                                    +{project.stack.split(', ').length - 4}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    {showActions && (
                        <div className="project-actions">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link project-link--secondary"
                                title="View source code"
                            >
                                <FiGithub className="h-4 w-4" />
                                Code
                            </a>

                            <Link
                                to={`/projects/${project.id}`}
                                className="project-link project-link--primary"
                                title="View project details"
                            >
                                <FiExternalLink className="h-4 w-4" />
                                Details
                            </Link>

                            {project.hasDetails && onDetailsClick && (
                                <button
                                    onClick={handleDetailsClick}
                                    className="project-link project-link--secondary"
                                    title="Quick preview"
                                >
                                    <FiEye className="h-4 w-4" />
                                    Preview
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Link>

    );
};

export default ProjectCard;