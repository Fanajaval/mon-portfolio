import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Titre */}
        <motion.div
          className="about-heading"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.25
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}
        >
          <span className="about-label">
            À PROPOS
          </span>

          <h2>
            À propos de <span>moi</span>
          </h2>

          <div className="about-line"></div>
        </motion.div>


        {/* Carte */}
        <motion.div
          className="about-card"
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut"
          }}
        >

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.35
            }}
          >
            Je suis <strong>Fanajarilala Valério</strong>,
            étudiant en troisième année de Licence en Génie
            Logiciel et Base de Données à l’ENI Fianarantsoa.
          </motion.p>


          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
          >
            Passionné par le développement informatique,
            je m’intéresse particulièrement à la conception
            d’applications <strong>web, mobiles et desktop</strong>.
            J’aime mettre en pratique mes connaissances à travers
            des projets concrets et explorer de nouvelles technologies.
          </motion.p>


          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.65
            }}
          >
            Curieux et motivé, je cherche constamment à développer
            mes compétences en informatique, à approfondir mes
            connaissances dans le développement d’applications et
            à acquérir davantage d’expérience professionnelle à
            travers des projets et des opportunités de stage.
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
}

export default About;