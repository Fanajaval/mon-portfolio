function SkillCategory({ title, items }) {
  return (
    <div className="skill-category">

      <h3>{title}</h3>

      <div className="skills-grid">

        {items.map((skill) => {

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

    </div>
  );
}

export default SkillCategory;