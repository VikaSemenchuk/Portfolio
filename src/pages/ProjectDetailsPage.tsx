// import { useParams } from "react-router-dom";
// import projectData from "../data/projects.json";
// import { Project } from "../types/Project";

const ProjectDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const projects: Project[] = projectData;

//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     return <div className="p-4">Проєкт не знайдено</div>;
//   }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Pets project</h1>
      {/* <h1 className="text-2xl font-bold mb-2">{project.title}</h1> */}
      <p>Hier is my Pets project</p>
      
      {/* <p>{project.description}</p> */}
    </div>
  );
};

export default ProjectDetail;