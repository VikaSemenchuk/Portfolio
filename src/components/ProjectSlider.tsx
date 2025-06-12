import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useProjects, useProjectsLoading } from "@/store/useProjectsStore";
import { useProjectsInit } from "@/hooks/useProjectsInit";
import ProjectCard from "./ProjectCard";

const ProjectSlider: React.FC = () => {
  const { t: tPages } = useTranslation('pages');
  const { t: tCommon } = useTranslation('common');
  
  useProjectsInit();
  
  const projects = useProjects();
  const isLoading = useProjectsLoading();
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollAmount = 320;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            🚀 {tPages("projects.title")}
          </h2>
          <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-lg p-8 text-center shadow-lg">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full 
                            animate-spin skeleton-loader"></div>
              <p className="text-lg">Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            🚀 {tPages("projects.title")}
          </h2>
          <div className="bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-lg p-8 text-center shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300">No projects available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            🚀 {tPages("projects.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing different technologies and skills
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700 rounded-full shadow-lg 
                       flex items-center justify-center transition-all duration-200 focus-ring btn-press
                       ${canScrollLeft 
                         ? 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300' 
                         : 'opacity-50 cursor-not-allowed text-gray-400'}`}
            aria-label="Scroll left"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 
                       border border-gray-200 dark:border-gray-700 rounded-full shadow-lg 
                       flex items-center justify-center transition-all duration-200 focus-ring btn-press
                       ${canScrollRight 
                         ? 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300' 
                         : 'opacity-50 cursor-not-allowed text-gray-400'}`}
            aria-label="Scroll right"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal scroller */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12 py-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-80 mobile-card-spacing"
              >
                <ProjectCard
                  project={project}
                  showActions={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                     bg-blue-500 text-white rounded-lg font-medium 
                     hover:bg-blue-600 transition-colors shadow-md focus-ring btn-press"
          >
            {tCommon("buttons.allProjects")} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;