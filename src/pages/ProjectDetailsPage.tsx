import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiExternalLink, 
  FiArrowLeft, 
  FiCalendar, 
  FiUsers, 
  FiCode, 
  FiAward 
} from "react-icons/fi";

import { useProjectsStore } from "@/store/useProjectsStore";
import { sectionVariant } from "@/styles/animations";

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('common');
  const getProjectById = useProjectsStore(state => state.getProjectById);
  
  const project = id ? getProjectById(id) : null;

 
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="min-h-screen py-8"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Navigation */}
          <motion.nav className="mb-8" variants={sectionVariant}>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <FiArrowLeft className="h-4 w-4" />
              Всі проєкти
            </Link>
          </motion.nav>

          {/* Hero Section */}
          <motion.div className="mb-12" variants={sectionVariant}>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Info */}
              <div className="space-y-6">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="flex items-center gap-2">
                    <FiAward className="h-5 w-5 text-accent" />
                    <span className="badge-featured text-sm">
                      {t("projectCard.featured")}
                    </span>
                  </div>
                )}

                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h1>
                  
                  {project.role && (
                    <p className="text-lg text-accent font-medium mb-4">
                      {t("projectCard.role")} {project.role}
                    </p>
                  )}
                  
                  <p className="text-xl text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-accent">
                    {t("projectCard.techStack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(', ').map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <FiGithub className="mr-2 h-4 w-4" />
                    {t("buttons.sourceCode")}
                  </a>
                  
                  {project.link.includes('github.com') && (
                    <a
                      href={project.link.replace('github.com', 'github.dev')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FiCode className="mr-2 h-4 w-4" />
                      Open in VS Code
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image */}
              <div className="lg:order-first">
                {project.image ? (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                ) : (
                  <div className="aspect-video bg-surface rounded-xl flex items-center justify-center text-6xl">
                    🚀
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Detailed Information */}
          {project.detailed && (
            <div className="space-y-12">
              {/* Project Overview */}
              {project.detailed.overview && (
                <motion.section 
                  className="prose prose-lg max-w-none"
                  variants={sectionVariant}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.overview")}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {project.detailed.overview}
                  </p>
                </motion.section>
              )}

              {/* My Role */}
              {project.detailed.myRole && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.myRole")}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {project.detailed.myRole}
                  </p>
                </motion.section>
              )}

              {/* Technologies & Architecture */}
              {project.detailed.technologies && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.technologies")}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Backend */}
                    {project.detailed.technologies.backend && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-accent">Backend</h3>
                        <ul className="space-y-2">
                          {project.detailed.technologies.backend.map((tech, index) => (
                            <li key={index} className="text-text-secondary flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Architecture */}
                    {project.detailed.technologies.architecture && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-accent">Architecture</h3>
                        <ul className="space-y-2">
                          {project.detailed.technologies.architecture.map((tech, index) => (
                            <li key={index} className="text-text-secondary flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Data Management */}
                    {project.detailed.technologies.dataManagement && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-accent">Data Management</h3>
                        <ul className="space-y-2">
                          {project.detailed.technologies.dataManagement.map((tech, index) => (
                            <li key={index} className="text-text-secondary flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.section>
              )}

              {/* Key Features */}
              {project.detailed.features && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.features")}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.detailed.features.map((feature, index) => (
                      <div key={index} className="bg-surface p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-accent mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Project Stats */}
              {project.detailed.stats && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.stats")}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <FiUsers className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">{project.detailed.stats.teamSize}</div>
                      <div className="text-sm text-text-secondary">Team Size</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <FiCode className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">{project.detailed.stats.endpoints}</div>
                      <div className="text-sm text-text-secondary">Endpoints</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <FiCalendar className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">{project.detailed.stats.modules}</div>
                      <div className="text-sm text-text-secondary">Modules</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <FiExternalLink className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">{project.detailed.stats.filterParams}</div>
                      <div className="text-sm text-text-secondary">Filter Params</div>
                    </div>
                    <div className="text-center p-4 bg-surface rounded-lg">
                      <FiAward className="h-6 w-6 mx-auto mb-2 text-accent" />
                      <div className="text-2xl font-bold">{project.detailed.stats.coverage}</div>
                      <div className="text-sm text-text-secondary">Coverage</div>
                    </div>
                  </div>
                </motion.section>
              )}

              {/* Key Achievements */}
              {project.detailed.achievements && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.achievements")}
                  </h2>
                  <ul className="space-y-4">
                    {project.detailed.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FiAward className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Code Examples */}
              {project.detailed.codeExamples && (
                <motion.section variants={sectionVariant}>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("projectModal.codeExamples")}
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(project.detailed.codeExamples).map(([key, code]) => (
                      <div key={key} className="space-y-3">
                        <h3 className="text-xl font-semibold text-accent capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <pre className="bg-surface p-4 rounded-lg text-sm overflow-x-auto border">
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>
          )}

          {/* Bottom Actions */}
          <motion.div 
            className="mt-16 pt-8 border-t border-border text-center"
            variants={sectionVariant}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FiGithub className="mr-2 h-4 w-4" />
                {t("buttons.sourceCode")}
              </a>
              
              <Link to="/projects" className="btn-secondary">
                <FiArrowLeft className="mr-2 h-4 w-4" />
                Всі проєкти
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsPage;