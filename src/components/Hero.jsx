import "../styles/Hero.css";
import profile from "../assets/images/profile.png"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          Bonjour, je suis
        </p>

        <h1 className="hero-title">
          Fanajarilala Valério
          <br />
          ANDRIATOAVIMANANA
        </h1>

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
          <a href="#contact" className="btn-primary">
            Me contacter
          </a>

          <a href="/cv.pdf" className="btn-secondary" download>
            Télécharger mon CV
          </a>
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