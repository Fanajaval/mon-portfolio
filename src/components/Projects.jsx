import { motion } from "framer-motion";
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

      {/* En-tête */}
      <motion.div
        className="projects-heading"
        initial={{
          opacity: 0,
          y: 35
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          amount: 0.3
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut"
        }}
      >

        <span className="projects-label">
          RÉALISATIONS
        </span>

        <h2 className="section-title">
          Mes <span>projets</span>
        </h2>

        <div className="projects-line"></div>

        <p className="projects-intro">
          Découvrez quelques projets réalisés au cours de mon
          parcours académique et personnel.
        </p>

      </motion.div>


      {/* Applications mobiles */}
      {mobileProjects.length > 0 && (
        <motion.div
          className="project-category"

          initial={{
            opacity: 0,
            y: 35
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true,
            amount: 0.15
          }}

          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >

          <h3>
            <span className="category-dot"></span>
            Applications mobiles
          </h3>

          <div className="projects-grid">

            {mobileProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </motion.div>
      )}


      {/* Applications web */}
      {webProjects.length > 0 && (
        <motion.div
          className="project-category"

          initial={{
            opacity: 0,
            y: 35
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true,
            amount: 0.15
          }}

          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >

          <h3>
            <span className="category-dot"></span>
            Applications web
          </h3>

          <div className="projects-grid">

            {webProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </motion.div>
      )}


      {/* Applications desktop */}
      {desktopProjects.length > 0 && (
        <motion.div
          className="project-category"

          initial={{
            opacity: 0,
            y: 35
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true,
            amount: 0.15
          }}

          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >

          <h3>
            <span className="category-dot"></span>
            Applications desktop
          </h3>

          <div className="projects-grid">

            {desktopProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </motion.div>
      )}

    </section>
  );
}

export default Projects;