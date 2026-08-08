import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {

  const mobileProjects = projects.filter(
    project => project.category === "Mobile"
  );

  const webProjects = projects.filter(
    project => project.category === "Web"
  );

  const desktopProjects = projects.filter(
    project => project.category === "Desktop"
  );

  return (
    <section className="projects" id="projects">

      <h2 className="section-title">
        Mes Projets
      </h2>

      {/* Mobile */}
      <div className="project-category">

        <h3>Applications mobiles</h3>

        <div className="projects-grid">

          {mobileProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>


      {/* Web */}
      <div className="project-category">

        <h3>Applications web</h3>

        <div className="projects-grid">

          {webProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>


      {/* Desktop */}
      {desktopProjects.length > 0 && (

        <div className="project-category">

          <h3>Applications desktop</h3>

          <div className="projects-grid">

            {desktopProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </div>

      )}

    </section>
  );
}

export default Projects;