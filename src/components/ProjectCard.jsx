import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >

      <img
        src={project.image}
        alt={project.title}
        className={`project-image ${project.category === "Mobile" ? "mobile-image" : "web-image"}`}
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
    </motion.div>  
  );
}

export default ProjectCard;