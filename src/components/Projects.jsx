import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2 className="section-title">
        Mes Projets
      </h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;