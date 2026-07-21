import "../styles/Skills.css";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        Mes Compétences
      </h2>

      <h3>Langages</h3>

      <div className="skills-grid">
        {skills.languages.map((language) => (
          <div className="skill-card" key={language}>
            <h4>{language}</h4>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;