import "../styles/Skills.css";
import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        Mes Compétences
      </h2>

      <SkillCategory
        title="Langages"
        items={skills.languages}
      />

      <SkillCategory
        title="Frameworks"
        items={skills.frameworks}
      />

      <SkillCategory
        title="Bases de données"
        items={skills.databases}
      />

      <SkillCategory
        title="Outils"
        items={skills.tools}
      />

      <SkillCategory
        title="En apprentissage"
        items={skills.learning}
      />

    </section>
  );
}

export default Skills;