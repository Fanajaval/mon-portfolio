import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaDownload,
} from "react-icons/fa6";

import { motion } from "framer-motion";
import "../styles/Contact.css";

const contactItems = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "andriatoavimanana@gmail.com",
    href: "mailto:andriatoavimanana@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Téléphone",
    value: "+261 38 23 676 09",
    href: "tel:+261382367609",
  },
  {
    icon: FaLocationDot,
    title: "Localisation",
    value: "Fianarantsoa, Madagascar",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Fanajaval",
    href: "https://github.com/Fanajaval",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-heading"
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
        <span className="contact-label">
          RESTONS EN CONTACT
        </span>

        <h2 className="section-title">
          Me <span>contacter</span>
        </h2>

        <div className="contact-line"></div>
      </motion.div>

      <motion.p
        className="contact-intro"
        initial={{
          opacity: 0,
          y: 20,
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
          duration: 0.6,
          delay: 0.15,
        }}
      >
        Je suis actuellement à la recherche d’un stage en développement
        logiciel à partir de septembre. N’hésitez pas à me contacter,
        je serai ravi d’échanger avec vous.
      </motion.p>

      <div className="contact-grid">

        {contactItems.map((item, index) => {
          const Icon = item.icon;

          const content = (
            <>
              <div className="contact-icon-wrapper">
                <Icon className="contact-icon" />
              </div>

              <div className="contact-content">
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </>
          );

          return item.href ? (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.title === "GitHub" ? "_blank" : undefined}
              rel={
                item.title === "GitHub"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="contact-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -7,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              {content}
            </motion.a>
          ) : (
            <motion.div
              key={item.title}
              className="contact-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -7,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              {content}
            </motion.div>
          );
        })}

      </div>

      <motion.div
        className="cv-container"
        initial={{
          opacity: 0,
          y: 25,
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
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <a
          href="/CV_Fanaja_Valério.pdf"
          download
          className="cv-button"
        >
          <FaDownload />
          <span>Télécharger mon CV</span>
        </a>
      </motion.div>

    </section>
  );
}

export default Contact;