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

        {skills.languages.map((skill) => {

          const Icon = skill.icon;

          return (

            <div className="skill-card" key={skill.name}>

              <Icon
                className="skill-icon"
                style={{ color: skill.color }}
        />

        <h4>{skill.name}</h4>

      </div>

    );

  })}

</div>

    </section>
  );
}

export default Skills;