import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";
import { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
      
      let newIndex = 0;
      let minDistance = Infinity;
      const items = container.children;
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        const itemCenter = itemLeft + itemWidth / 2;
        const viewCenter = scrollLeft + containerWidth / 2;
        
        const distance = Math.abs(itemCenter - viewCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newIndex = i;
        }
      }
      
      setActiveIndex(newIndex);
    }
  };

  const navigateCarousel = (ref, direction, currentIndex, setActiveIndex, totalItems) => {
    if (!ref.current) return;
    
    const container = ref.current;
    let newIndex = currentIndex;
    
    if (direction === 'next' && currentIndex < totalItems - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }
    
    const item = container.children[newIndex];
    if (item) {
      const containerWidth = container.offsetWidth;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
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
      mobileRef.addEventListener('scroll', handleMobileScroll, { passive: true });
      handleMobileScroll();
    }
    if (webRef) {
      webRef.addEventListener('scroll', handleWebScroll, { passive: true });
      handleWebScroll();
    }
    if (desktopRef) {
      desktopRef.addEventListener('scroll', handleDesktopScroll, { passive: true });
      handleDesktopScroll();
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
  }, []);

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

          <button
            className={`carousel-nav-button carousel-nav-prev ${mobileActiveIndex > 0 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(mobileScrollRef, 'prev', mobileActiveIndex, setMobileActiveIndex, mobileProjects.length)}
            aria-label="Projet précédent"
          >
            <FaChevronLeft />
          </button>

          <button
            className={`carousel-nav-button carousel-nav-next ${mobileActiveIndex < mobileProjects.length - 1 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(mobileScrollRef, 'next', mobileActiveIndex, setMobileActiveIndex, mobileProjects.length)}
            aria-label="Projet suivant"
          >
            <FaChevronRight />
          </button>

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

          <button
            className={`carousel-nav-button carousel-nav-prev ${webActiveIndex > 0 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(webScrollRef, 'prev', webActiveIndex, setWebActiveIndex, webProjects.length)}
            aria-label="Projet précédent"
          >
            <FaChevronLeft />
          </button>

          <button
            className={`carousel-nav-button carousel-nav-next ${webActiveIndex < webProjects.length - 1 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(webScrollRef, 'next', webActiveIndex, setWebActiveIndex, webProjects.length)}
            aria-label="Projet suivant"
          >
            <FaChevronRight />
          </button>

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

          <button
            className={`carousel-nav-button carousel-nav-prev ${desktopActiveIndex > 0 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(desktopScrollRef, 'prev', desktopActiveIndex, setDesktopActiveIndex, desktopProjects.length)}
            aria-label="Projet précédent"
          >
            <FaChevronLeft />
          </button>

          <button
            className={`carousel-nav-button carousel-nav-next ${desktopActiveIndex < desktopProjects.length - 1 ? 'visible' : ''}`}
            onClick={() => navigateCarousel(desktopScrollRef, 'next', desktopActiveIndex, setDesktopActiveIndex, desktopProjects.length)}
            aria-label="Projet suivant"
          >
            <FaChevronRight />
          </button>

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