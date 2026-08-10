import {
  FaGithub,
  FaArrowUp,
} from "react-icons/fa6";

import { motion } from "framer-motion";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <motion.div
        className="footer-content"
        initial={{
          opacity: 0,
          y: 30,
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

        <h3>
          Fanajarilala Valério{" "}
          <span>ANDRIATOAVIMANANA</span>
        </h3>

        <p className="footer-description">
          Étudiant en L3 Génie Logiciel et Base de Données
          à l’ENI Fianarantsoa
        </p>


        <motion.div
          className="footer-socials"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
        >

          <motion.a
            href="https://github.com/Fanajaval"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <FaGithub />
          </motion.a>

        </motion.div>


        <motion.a
          href="#hero"
          className="back-to-top"
          whileHover={{
            y: -3,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <FaArrowUp />
          Retour en haut
        </motion.a>


        <div className="footer-separator"></div>


        <p className="copyright">
          &copy; {currentYear} Fanajarilala Valério
          ANDRIATOAVIMANANA. Tous droits réservés.
        </p>

      </motion.div>

    </footer>
  );
}

export default Footer;