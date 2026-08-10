import {
  FaGithub,
  FaArrowUp,
} from "react-icons/fa6";

import "../styles/Footer.css";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-content">

        <h3>Fanajarilala Valério ANDRIATOAVIMANANA</h3>

        <p>
          Étudiant en L3 Génie Logiciel et Base de Données à l’ENI Fianarantsoa
        </p>


        <div className="footer-socials">

          <a
            href="https://github.com/Fanajaval"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

        </div>


        <a href="#hero" className="back-to-top">

          <FaArrowUp />
          Retour en haut

        </a>


        <p className="copyright">
          © {currentYear} Fanajarilala Valério ANDRIATOAVIMANANA. Tous droits réservés.
        </p>

      </div>

    </footer>

  );
}

export default Footer;