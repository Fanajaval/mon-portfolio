import "../styles/Hero.css";
import profile from "../assets/images/profile.png"
import {motion} from "framer-motion"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p className="hero-greeting" 
        initial={{
          opacity: 0,
          x: -200
        }}
        animate= {{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1
        }}
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1 className="hero-title"
        initial={{
          opacity: 0,
          x: -200
        }}
        animate= {{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 1
        }}
        >
          Fanajarilala Valério
          <br />
          ANDRIATOAVIMANANA
        </motion.h1>

        <h2 className="hero-subtitle">
          Développeur Full Stack Junior
        </h2>

        <p className="hero-description">
          Etudiant en troisième année en Génie Logiciel
          et Base de Données à l'ENI Fianarantsoa.
          Passionné par le développement d'applications
          web modernes et toujours motivé pour apprendre
          de nouvelles technologies.
        </p>

        <div className="hero-buttons">
          <motion.a href="#contact" className="btn-primary" 
          whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }} 
          transition={{duration: 0.1, type: "spring"}}>
            Me contacter
          </motion.a>

          <motion.a href="/cv.pdf" className="btn-secondary" download 
          whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }} 
          transition={{type: "spring",
  stiffness: 100,
  damping: 10}}>
            Télécharger mon CV
          </motion.a>
        </div>
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