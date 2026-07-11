import "../styles/Hero.css";
import profile from "../assets/images/profile.png"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Bonjour, je suis Fanajarilala
        </h1>

        <h2>
          Développeur Full Stack
        </h2>
        <p>
          Je développe des applications web modernes
          avec React, Node.js et les technologies du web.
        </p>
        <div className="hero-buttons">
          <button>
            Me contacter
          </button>
          <button>
            Mes projets
          </button>
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