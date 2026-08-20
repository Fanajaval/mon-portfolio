import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { useRef, useState, useEffect } from "react";

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

  const mobileScrollRef = useRef(null);
  const webScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [webActiveIndex, setWebActiveIndex] = useState(0);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  const handleScroll = (ref, setActiveIndex, totalItems, name) => {
    if (ref.current) {
      const container = ref.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const scrollWidth = container.scrollWidth;
      
      let newIndex = 0;
      const items = container.children;
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        const itemCenter = itemLeft + itemWidth / 2;
        const viewCenter = scrollLeft + containerWidth / 2;
        
        if (Math.abs(itemCenter - viewCenter) < itemWidth / 2) {
          newIndex = i;
          break;
        }
      }
      
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const mobileRef = mobileScrollRef.current;
    const webRef = webScrollRef.current;
    const desktopRef = desktopScrollRef.current;

    const handleMobileScroll = () => handleScroll(mobileScrollRef, setMobileActiveIndex, mobileProjects.length, 'mobile');
    const handleWebScroll = () => handleScroll(webScrollRef, setWebActiveIndex, webProjects.length, 'web');
    const handleDesktopScroll = () => handleScroll(desktopScrollRef, setDesktopActiveIndex, desktopProjects.length, 'desktop');

    if (mobileRef) {
      mobileRef.addEventListener('scroll', handleMobileScroll);
    }
    if (webRef) {
      webRef.addEventListener('scroll', handleWebScroll);
    }
    if (desktopRef) {
      desktopRef.addEventListener('scroll', handleDesktopScroll);
    }

    return () => {
      if (mobileRef) {
        mobileRef.removeEventListener('scroll', handleMobileScroll);
      }
      if (webRef) {
        webRef.removeEventListener('scroll', handleWebScroll);
      }
      if (desktopRef) {
        desktopRef.removeEventListener('scroll', handleDesktopScroll);
      }
    };
  }, [mobileProjects.length, webProjects.length, desktopProjects.length]);

  return (
    <section className="projects" id="projects">

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

          <div className="projects-grid mobile-projects-grid" ref={mobileScrollRef}>

            {mobileProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

          {mobileProjects.length > 1 && (
            <div className="carousel-indicators">
              {mobileProjects.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === mobileActiveIndex ? 'active' : ''}`}
                  onClick={() => {
                    const container = mobileScrollRef.current;
                    if (container) {
                      const item = container.children[index];
                      if (item) {
                        const containerWidth = container.offsetWidth;
                        const itemLeft = item.offsetLeft;
                        const itemWidth = item.offsetWidth;
                        const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
                        
                        container.scrollTo({
                          left: scrollPosition,
                          behavior: 'smooth'
                        });
                        setMobileActiveIndex(index);
                      }
                    }
                  }}
                />
              ))}
            </div>
          )}

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

          <div className="projects-grid web-projects-grid" ref={webScrollRef}>
            {webProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

          {webProjects.length > 1 && (
            <div className="carousel-indicators">
              {webProjects.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === webActiveIndex ? 'active' : ''}`}
                  onClick={() => {
                    const container = webScrollRef.current;
                    if (container) {
                      const item = container.children[index];
                      if (item) {
                        const containerWidth = container.offsetWidth;
                        const itemLeft = item.offsetLeft;
                        const itemWidth = item.offsetWidth;
                        const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
                        
                        container.scrollTo({
                          left: scrollPosition,
                          behavior: 'smooth'
                        });
                        setWebActiveIndex(index);
                      }
                    }
                  }}
                />
              ))}
            </div>
          )}

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

          <div className="projects-grid desktop-projects-grid" ref={desktopScrollRef}>

            {desktopProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

          {desktopProjects.length > 1 && (
            <div className="carousel-indicators">
              {desktopProjects.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === desktopActiveIndex ? 'active' : ''}`}
                  onClick={() => {
                    const container = desktopScrollRef.current;
                    if (container) {
                      const item = container.children[index];
                      if (item) {
                        const containerWidth = container.offsetWidth;
                        const itemLeft = item.offsetLeft;
                        const itemWidth = item.offsetWidth;
                        const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
                        
                        container.scrollTo({
                          left: scrollPosition,
                          behavior: 'smooth'
                        });
                        setDesktopActiveIndex(index);
                      }
                    }
                  }}
                />
              ))}
            </div>
          )}

        </motion.div>
      )}

    </section>
  );
}

export default Projects;