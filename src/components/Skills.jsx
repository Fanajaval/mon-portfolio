import "../styles/Skills.css";
import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="skills">

      <motion.div
        className="skills-heading"
        initial={{
          opacity: 0,
          y: 35
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          amount: 0.3
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut"
        }}
      >
        <span className="skills-label">
          COMPÉTENCES TECHNIQUES
        </span>

        <h2 className="section-title">
          Mes <span>compétences</span>
        </h2>

        <div className="skills-line"></div>
      </motion.div>

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