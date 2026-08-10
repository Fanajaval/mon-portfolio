import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
} from "react-icons/fa6";

import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact
      </h2>

      <p className="contact-intro">
        Je suis actuellement à la recherche d’un stage en développement logiciel
        à partir de septembre. N’hésitez pas à me contacter.
      </p>

      <div className="contact-grid">

        {/* Email */}
        <a
          href="mailto:andriatoavimanana@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />

          <div>
            <h3>Email</h3>
            <p>andriatoavimananana@gmail.com</p>
          </div>
        </a>


        {/* Téléphone */}
        <a
          href="tel:+261382367609"
          className="contact-card"
        >
          <FaPhone className="contact-icon" />

          <div>
            <h3>Téléphone</h3>
            <p>+261 38 23 676 09</p>
          </div>
        </a>


        {/* Localisation */}
        <div className="contact-card">

          <FaLocationDot className="contact-icon" />

          <div>
            <h3>Localisation</h3>
            <p>Fianarantsoa, Madagascar</p>
          </div>

        </div>


        {/* GitHub */}
        <a
          href="https://github.com/Fanajaval"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <div>
            <h3>GitHub</h3>
            <p>github.com/Fanajaval</p>
          </div>
        </a>

      </div>


      {/* Bouton CV */}
      <div className="cv-container">

        <a
          href="/cv.pdf"
          download
          className="cv-button"
        >
          Télécharger mon CV
        </a>

      </div>

    </section>
  );
}

export default Contact;