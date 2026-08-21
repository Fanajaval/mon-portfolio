import "../styles/Education.css";
import { motion } from "framer-motion";
import { parcoursData } from "../data/parcours";
import { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="education" id="parcours">

      <motion.div
        className="education-heading"

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

        <span className="education-label">
          PARCOURS
        </span>

        <h2 className="section-title">
          Mon <span>parcours</span>
        </h2>

        <div className="education-line"></div>

        <p className="education-intro">
          Mon parcours académique et professionnel en informatique et
          développement logiciel.
        </p>

      </motion.div>


      <div className="education-timeline">

        {parcoursData.map((item, index) => (

          <motion.div
            className={`education-item ${
              index % 2 === 0 ? "left" : "right"
            } ${item.type}`}

            key={`${item.type}-${index}`}

            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true,
              amount: 0.25
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut"
            }}
          >

            <div className="education-dot"></div>

            <div className="education-card">

              <div className="parcours-header">
                <div className={`parcours-label ${item.type}`}>
                  {item.type === "formation" ? (
                    <>
                      <FaGraduationCap className="parcours-icon" />
                      <span>FORMATION</span>
                    </>
                  ) : (
                    <>
                      <FaBriefcase className="parcours-icon" />
                      <span>EXPÉRIENCE</span>
                    </>
                  )}
                </div>

                <span className="education-year">
                  {item.year}
                </span>
              </div>

              <h3>
                {item.title} — {item.organization}
              </h3>

              {item.projects && (
                <div className="parcours-projects-list">
                  {item.projects.map((project, idx) => (
                    <p key={idx} className="parcours-project-item">
                      {project}
                    </p>
                  ))}
                </div>
              )}

              {item.details && (
                <>
                  <button 
                    className="parcours-details-btn"
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedIndex === index ? (
                      <>
                        Masquer les détails
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        Voir les détails
                        <FaChevronDown />
                      </>
                    )}
                  </button>

                  {expandedIndex === index && (
                    <motion.div
                      className="parcours-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="detail-block">
                          <h4>{detail.title}</h4>
                          <p>{detail.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </>
              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;
