import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiGithub, 
  FiExternalLink, 
  FiUsers, 
  FiCode, 
  FiCalendar, 
  FiAward 
} from 'react-icons/fi';

import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            variants={backdropVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  {project.featured && (
                    <span className="badge-featured text-xs">
                      {t("projectCard.featured")}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-surface transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="p-6 space-y-8">
                  {/* Project Image & Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="space-y-4">
                      {project.image ? (
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-48 bg-surface rounded-lg flex items-center justify-center text-4xl">
                          🚀
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-sm flex-1"
                        >
                          <FiGithub className="mr-2 h-4 w-4" />
                          {t("buttons.sourceCode")}
                        </a>
                        <Link
                          to={`/projects/${project.id}`}
                          className="btn-sm flex-1"
                          onClick={onClose}
                        >
                          <FiExternalLink className="mr-2 h-4 w-4" />
                          {t("buttons.viewDetails")}
                        </Link>
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        {project.role && (
                          <p className="text-sm text-accent font-medium">
                            {t("projectCard.role")} {project.role}
                          </p>
                        )}
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-accent mb-2">
                          {t("projectCard.techStack")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.split(', ').map((tech, index) => (
                            <span key={index} className="tech-tag text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  {project.detailed && (
                    <div className="space-y-6">
                      {/* Overview */}
                      {project.detailed.overview && (
                        <section>
                          <h3 className="text-lg font-semibold mb-3">
                            {t("projectModal.overview")}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {project.detailed.overview}
                          </p>
                        </section>
                      )}

                      {/* Stats */}
                      {project.detailed.stats && (
                        <section>
                          <h3 className="text-lg font-semibold mb-3">
                            {t("projectModal.stats")}
                          </h3>
                          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                            <div className="text-center p-3 bg-surface rounded-lg">
                              <FiUsers className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="text-lg font-bold">{project.detailed.stats.teamSize}</div>
                              <div className="text-xs text-text-secondary">Team</div>
                            </div>
                            <div className="text-center p-3 bg-surface rounded-lg">
                              <FiCode className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="text-lg font-bold">{project.detailed.stats.endpoints}</div>
                              <div className="text-xs text-text-secondary">API</div>
                            </div>
                            <div className="text-center p-3 bg-surface rounded-lg">
                              <FiCalendar className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="text-lg font-bold">{project.detailed.stats.modules}</div>
                              <div className="text-xs text-text-secondary">Modules</div>
                            </div>
                            <div className="text-center p-3 bg-surface rounded-lg">
                              <FiExternalLink className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="text-lg font-bold">{project.detailed.stats.filterParams}</div>
                              <div className="text-xs text-text-secondary">Filters</div>
                            </div>
                            <div className="text-center p-3 bg-surface rounded-lg">
                              <FiAward className="h-4 w-4 mx-auto mb-1 text-accent" />
                              <div className="text-lg font-bold">{project.detailed.stats.coverage}</div>
                              <div className="text-xs text-text-secondary">Coverage</div>
                            </div>
                          </div>
                        </section>
                      )}

                      {/* Key Features Preview */}
                      {project.detailed.features && (
                        <section>
                          <h3 className="text-lg font-semibold mb-3">
                            {t("projectModal.features")}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.detailed.features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="bg-surface p-4 rounded-lg">
                                <h4 className="font-medium text-accent mb-2 text-sm">
                                  {feature.title}
                                </h4>
                                <p className="text-text-secondary text-xs">
                                  {feature.description.length > 100 
                                    ? `${feature.description.substring(0, 100)}...` 
                                    : feature.description
                                  }
                                </p>
                              </div>
                            ))}
                          </div>
                          {project.detailed.features.length > 4 && (
                            <p className="text-center text-sm text-text-secondary mt-3">
                              і ще {project.detailed.features.length - 4} функцій...
                            </p>
                          )}
                        </section>
                      )}

                      {/* Technologies Preview */}
                      {project.detailed.technologies && (
                        <section>
                          <h3 className="text-lg font-semibold mb-3">
                            {t("projectModal.technologies")}
                          </h3>
                          <div className="space-y-4">
                            {/* Backend */}
                            {project.detailed.technologies.backend && (
                              <div>
                                <h4 className="font-medium text-accent mb-2 text-sm">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.detailed.technologies.backend.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="tech-tag text-xs">
                                      {tech.split(' ')[0]}
                                    </span>
                                  ))}
                                  {project.detailed.technologies.backend.length > 3 && (
                                    <span className="tech-tag tech-tag--secondary text-xs">
                                      +{project.detailed.technologies.backend.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Architecture */}
                            {project.detailed.technologies.architecture && (
                              <div>
                                <h4 className="font-medium text-accent mb-2 text-sm">Architecture</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.detailed.technologies.architecture.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="tech-tag text-xs">
                                      {tech.split(' ')[0]}
                                    </span>
                                  ))}
                                  {project.detailed.technologies.architecture.length > 3 && (
                                    <span className="tech-tag tech-tag--secondary text-xs">
                                      +{project.detailed.technologies.architecture.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </section>
                      )}

                      {/* Key Achievements Preview */}
                      {project.detailed.achievements && (
                        <section>
                          <h3 className="text-lg font-semibold mb-3">
                            {t("projectModal.achievements")}
                          </h3>
                          <ul className="space-y-2">
                            {project.detailed.achievements.slice(0, 3).map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <FiAward className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-text-secondary text-sm">
                                  {achievement.length > 120 
                                    ? `${achievement.substring(0, 120)}...` 
                                    : achievement
                                  }
                                </span>
                              </li>
                            ))}
                          </ul>
                          {project.detailed.achievements.length > 3 && (
                            <p className="text-center text-sm text-text-secondary mt-3">
                              і ще {project.detailed.achievements.length - 3} досягнень...
                            </p>
                          )}
                        </section>
                      )}

                      {/* Call to Action */}
                      <div className="text-center pt-4 border-t border-border">
                        <p className="text-sm text-text-secondary mb-3">
                          Хочете дізнатися більше про цей проєкт?
                        </p>
                        <Link
                          to={`/projects/${project.id}`}
                          className="btn"
                          onClick={onClose}
                        >
                          <FiExternalLink className="mr-2 h-4 w-4" />
                          Переглянути всі деталі
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;