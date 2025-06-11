import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FiGithub } from "react-icons/fi";

import { useProjects, useProjectsLoading, useProjectsError } from "@/store";
import { useProjectsInit } from "@/hooks";
import { Project } from "@/types";

import { ProjectCard, ProjectModal } from "@/components";

const ProjectsPage = () => {
  const { t: tPages } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');

  useProjectsInit();
  
  const projects = useProjects();
  const isLoading = useProjectsLoading();
  const error = useProjectsError();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    console.log('Opening modal for:', project.title);
    if (project.hasDetails && project.detailed) {
      setSelectedProject(project);
    }
  };

  const closeProjectDetails = () => {
    console.log('Closing modal');
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading projects...</h1>
          <p className="text-text-secondary">Please wait while we load the projects.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading projects</h1>
          <p className="text-text-secondary mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No projects found</h1>
          <p className="text-text-secondary">Projects will be available soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-8 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            🚀 {tPages("projects.title")}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            {tPages("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section pb-16">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
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
        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}

      {/* CTA Section */}
      <section className="section py-16 bg-surface/50">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            {tPages("projects.collaborate.title")}
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            {tPages("projects.collaborate.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Viktoriia.semenchuk.dev@gmail.com"
              className="btn"
            >
              {tCommon("buttons.getInTouch")}
            </a>
            <a
              href="https://github.com/VikaSemenchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-control"
            >
              <FiGithub className="mr-2 h-4 w-4" />
              {tCommon("buttons.viewGitHub")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;