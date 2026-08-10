import "../styles/Hero.css";
import profile from "../assets/images/profile.png";
import { motion } from "framer-motion";

function Hero() {
  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 25
    },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="hero" id="hero">

      <div className="hero-content">

        {/* Bonjour */}
        <motion.p
          className="hero-greeting"
          custom={0.15}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          className="hero-title"
          custom={0.3}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Fanajarilala Valério
          <br />
          <span>ANDRIATOAVIMANANA</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          custom={0.5}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Développeur Full Stack Junior
        </motion.h2>

        <motion.p
          className="hero-description"
          custom={0.7}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >
          Etudiant en troisième année en Génie Logiciel
          et Base de Données à l'ENI Fianarantsoa.
          Passionné par le développement d'applications
          web modernes et toujours motivé pour apprendre
          de nouvelles technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          custom={0.9}
          variants={textAnimation}
          initial="hidden"
          animate="visible"
        >

          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{
              scale: 0.97
            }}
          >
            Me contacter
          </motion.a>


          <motion.a
            href="/cv.pdf"
            className="btn-secondary"
            download
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{
              scale: 0.97
            }}
          >
            Télécharger mon CV
          </motion.a>

        </motion.div>

      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Photo de profil"
          className="profile-image"
        />
      </div>

    </section>
  );
}

export default Hero;