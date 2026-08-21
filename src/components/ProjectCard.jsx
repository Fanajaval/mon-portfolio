import { FaGithub, FaLock } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectCard({ project }) {

  return (
    <motion.div
      className="project-card"

      initial={{
        opacity: 0,
        y: 40,
        scale: 0.96
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}

      viewport={{
        once: true,
        amount: 0.15
      }}

      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}

      whileHover={{
        y: -8
      }}
    >

      <div className="project-image-container">

        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${
            project.category === "Mobile"
              ? "mobile-image"
              : "web-image"
          }`}
        />

        <span className="project-category-badge">
          {project.category}
        </span>

      </div>


      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>


        <div className="project-techs">

          {project.technologies.map((tech) => (
            <span
              className="tech-badge"
              key={tech}
            >
              {tech}
            </span>
          ))}

        </div>


        <div className="project-links">

          {project.github && project.github !== "#" && project.github !== "private" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              <FaGithub />
              Voir sur GitHub
            </a>
          ) : (
            <div className="project-btn private-badge">
              <FaLock />
              Projet privé
            </div>
          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;