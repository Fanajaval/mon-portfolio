import "../styles/Education.css";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2025–2026",
    title: "L3 Génie Logiciel et Base de Données",
    school: "ENI Fianarantsoa"
  },
  {
    year: "2023–2025",
    title: "L1–L2 Génie Logiciel et Base de Données",
    school: "ENI Fianarantsoa"
  },
  {
    year: "2022–2023",
    title: "L1 Mathématiques et Informatique",
    school: "Université d’Antananarivo"
  }
];


function Education() {
  return (
    <section className="education" id="education">

      {/* En-tête */}
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
          Ma <span>formation</span>
        </h2>

        <div className="education-line"></div>

        <p className="education-intro">
          Mon parcours académique en informatique et
          développement logiciel.
        </p>

      </motion.div>


      {/* Timeline */}
      <div className="education-timeline">

        {educationData.map((education, index) => (

          <motion.div
            className={`education-item ${
              index % 2 === 0 ? "left" : "right"
            }`}

            key={education.year}

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

              <span className="education-year">
                {education.year}
              </span>

              <h3>
                {education.title}
              </h3>

              <p>
                {education.school}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Education;