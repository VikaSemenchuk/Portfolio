import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useProjects, useProjectsLoading } from "@/store/useProjectsStore";
import { useProjectsInit } from "@/hooks/useProjectsInit";
import ProjectCard from "./ProjectCard";

const ProjectSlider: React.FC = () => {
  const { t: tPages } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');
  
 
  useProjectsInit();
  
  const projects = useProjects();
  const isLoading = useProjectsLoading();

  const [current, setCurrent] = useState<number>(0);
  const length = projects.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  if (isLoading) {
    return (
      <section className="section">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            🚀 {tPages("projects.title")}
          </h2>
          <div className="max-w-6xl mx-auto border-2 border-accent rounded-xl p-6 shadow-lg bg-footer text-text">
            <p className="text-lg">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (length === 0) {
    return (
      <section className="section">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            🚀 {tPages("projects.title")}
          </h2>
          <div className="max-w-6xl mx-auto border-2 border-accent rounded-xl p-6 shadow-lg bg-footer text-text">
            <p className="text-lg">No projects available</p>
          </div>
        </div>
      </section>
    );
  }

  const currentProject = projects[current];

  return (
    <section className="section">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          🚀 {tPages("projects.title")}
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <ProjectCard
            project={currentProject}
            variant="slider"
            showActions={true}
          />

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button 
              onClick={prevSlide} 
              className="btn-secondary"
              aria-label="Previous project"
              disabled={length <= 1}
            >
              ←
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-accent' : 'bg-border'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide} 
              className="btn-secondary"
              aria-label="Next project"
              disabled={length <= 1}
            >
              →
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects">
            <button className="btn">
              {tCommon("buttons.allProjects")} →
            </button>
          </Link>
          
          {/* Link to current project details */}
          {currentProject?.hasDetails && (
            <Link to={`/projects/${currentProject.id}`}>
              <button className="btn-control">
                {tCommon("buttons.viewDetails")} →
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;