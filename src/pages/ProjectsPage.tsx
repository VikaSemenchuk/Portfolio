import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Calendar, Users, Code, Award } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  stack: string;
  link: string;
  image?: string;
  featured?: boolean;
  role?: string;
  detailed?: {
    overview: string;
    myRole: string;
    technologies: {
      backend: string[];
      architecture: string[];
      dataManagement: string[];
    };
    features: Array<{
      title: string;
      description: string;
    }>;
    achievements: string[];
    stats: {
      teamSize: string;
      endpoints: string;
      modules: string;
      filterParams: string;
      coverage: string;
    };
    codeExamples: {
      aggregation: string;
      cloudinary: string;
      middleware: string;
    };
  };
}

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects = t("projects", { returnObjects: true }) as Project[];
  console.log('projects :>> ', projects);

  const openProjectDetails = (project: Project) => {
    if (project.detailed) {
      setSelectedProject(project);
    }
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-8 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            🚀 {t("my-projects")}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and programming.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                onDetailsClick={openProjectDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          onClose={closeProjectDetails} 
        />
      )}

      {/* CTA Section */}
      <section className="section py-16 bg-surface/50">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Want to collaborate?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Viktoriia.semenchuk.dev@gmail.com"
              className="btn"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/VikaSemenchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-control"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  onDetailsClick 
}: { 
  project: Project; 
  index: number;
  onDetailsClick: (project: Project) => void;
}) => {
  return (
    <div 
      className={`group bg-background border-2 border-border hover:border-accent rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${project.featured ? 'ring-2 ring-accent/20' : ''}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-4 w-4 text-accent" />
          <span className="text-xs font-medium text-accent">Featured Project</span>
        </div>
      )}

      {/* Project Image */}
      <div className="mb-6 relative overflow-hidden rounded-lg bg-surface">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center text-4xl">
            🚀
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.role && (
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {project.role}
            </span>
          )}
        </div>
        
        <p className="text-text-secondary line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-accent">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.split(', ').map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs bg-surface rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="pt-4 flex flex-wrap gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
          
          {project.detailed && (
            <button
              onClick={() => onDetailsClick(project)}
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailsModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void; 
}) => {
  if (!project.detailed) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-accent">{project.role}</p>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-text-secondary leading-relaxed">
              {project.detailed.overview}
            </p>
          </section>

          {/* My Role */}
          <section>
            <h3 className="text-xl font-semibold mb-4">My Role & Responsibilities</h3>
            <p className="text-text-secondary leading-relaxed">
              {project.detailed.myRole}
            </p>
          </section>

          {/* Stats */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Project Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-surface rounded-lg">
                <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{project.detailed.stats.teamSize}</div>
                <div className="text-sm text-text-secondary">Team Size</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <Code className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{project.detailed.stats.endpoints}</div>
                <div className="text-sm text-text-secondary">Endpoints</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{project.detailed.stats.modules}</div>
                <div className="text-sm text-text-secondary">Modules</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <ExternalLink className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{project.detailed.stats.filterParams}</div>
                <div className="text-sm text-text-secondary">Filter Params</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <Award className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">{project.detailed.stats.coverage}</div>
                <div className="text-sm text-text-secondary">Coverage</div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Technologies & Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-accent mb-3">Backend</h4>
                <ul className="space-y-2">
                  {project.detailed.technologies.backend.map((tech, index) => (
                    <li key={index} className="text-sm text-text-secondary">
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-3">Architecture</h4>
                <ul className="space-y-2">
                  {project.detailed.technologies.architecture.map((tech, index) => (
                    <li key={index} className="text-sm text-text-secondary">
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-3">Data Management</h4>
                <ul className="space-y-2">
                  {project.detailed.technologies.dataManagement.map((tech, index) => (
                    <li key={index} className="text-sm text-text-secondary">
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.detailed.features.map((feature, index) => (
                <div key={index} className="p-4 bg-surface rounded-lg">
                  <h4 className="font-medium text-accent mb-2">{feature.title}</h4>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
            <ul className="space-y-2">
              {project.detailed.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Code Examples */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-accent mb-2">MongoDB Aggregation</h4>
                <pre className="bg-surface p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{project.detailed.codeExamples.aggregation}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Cloudinary Configuration</h4>
                <pre className="bg-surface p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{project.detailed.codeExamples.cloudinary}</code>
                </pre>
              </div>
              <div>
                <h4 className="font-medium text-accent mb-2">Authentication Middleware</h4>
                <pre className="bg-surface p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{project.detailed.codeExamples.middleware}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="flex gap-4 pt-4 border-t border-border">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;