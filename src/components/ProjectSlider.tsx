import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  stack: string;
  link: string;
}

const ProjectSlider: React.FC = () => {
  const { t } = useTranslation();

  
  const projects = t("projects", { returnObjects: true }) as Project[];

  const [current, setCurrent] = useState<number>(0);
  const length = projects.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  return (
    <section className="section">
      <div className=" text-center space-y-6">
        <h2 className="text-3xl font-semibold">🚀 {t("my-projects")}</h2>

        <div className="relative 	max-w-6xl mx-auto border-2 border-accent rounded-xl p-6 shadow-lg bg-footer text-text transition-smooth">
          <h3 className="text-2xl font-bold mb-2">{projects[current].title}</h3>
          <p className="text-lg">{projects[current].description}</p>
          <p className="text-sm italic text-muted-foreground mt-1">{projects[current].stack}</p>
          <a
            href={projects[current].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 underline hover:text-accent"
          >
            GitHub →
          </a>

          <div className="flex justify-between mt-6">
            <button onClick={prevSlide} className="btn-secondary">←</button>
            <button onClick={nextSlide} className="btn-secondary">→</button>
          </div>
        </div>

        <Link to="/projects">
          <button className="btn mt-6">
            {t("all-projects")} →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSlider;
