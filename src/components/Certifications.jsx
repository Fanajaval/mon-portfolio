import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import DistinctionCard from "./DistinctionCard";
import "../styles/Certifications.css";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Certifications() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
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
  }, []);

  const navigateCarousel = (direction) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    let newIndex = activeIndex;
    
    if (direction === 'next' && activeIndex < certifications.length - 1) {
      newIndex = activeIndex + 1;
    } else if (direction === 'prev' && activeIndex > 0) {
      newIndex = activeIndex - 1;
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
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);
  return (
    <section id="certifications" className="certifications">

      <motion.div
        className="certifications-heading"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <span className="certifications-label">
          FORMATIONS SUPPLÉMENTAIRES
        </span>

        <h2 className="section-title">
          Mes <span>certifications</span>
        </h2>

        <div className="certifications-line"></div>
      </motion.div>

      <div className="certifications-container">
        <button
          className={`carousel-nav-button carousel-nav-prev ${activeIndex > 0 ? 'visible' : ''}`}
          onClick={() => navigateCarousel('prev')}
          aria-label="Certification précédente"
        >
          <FaChevronLeft />
        </button>

        <button
          className={`carousel-nav-button carousel-nav-next ${activeIndex < certifications.length - 1 ? 'visible' : ''}`}
          onClick={() => navigateCarousel('next')}
          aria-label="Certification suivante"
        >
          <FaChevronRight />
        </button>

        <div className="certifications-grid" ref={scrollRef}>
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>

        {certifications.length > 1 && (
          <div className="carousel-indicators">
            {certifications.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  const container = scrollRef.current;
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
                      setActiveIndex(index);
                    }
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div
        className="distinction-separator"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h3>
          <span></span>
          Distinction
          <span></span>
        </h3>
      </motion.div>

      <DistinctionCard />

    </section>
  );
}

export default Certifications;