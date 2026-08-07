import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-techs">
          {project.technologies.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo-btn"
          >
            <FiExternalLink />
            Démo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;