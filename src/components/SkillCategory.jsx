import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12
    }
  }
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};


function SkillCategory({ title, items }) {

  return (
    <motion.div
      className="skill-category"

      initial={{
        opacity: 0,
        y: 30
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      viewport={{
        once: true,
        amount: 0.15
      }}

      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >

      <h3>{title}</h3>

      <motion.div
        className="skills-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15
        }}
      >

        {items.map((skill) => {

          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card"
              key={skill.name}
              variants={itemVariants}

              whileHover={{
                y: -8,
                scale: 1.03
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >

              <div className="skill-icon-container">
                <Icon
                  className="skill-icon"
                  style={{
                    color: skill.color
                  }}
                />
              </div>

              <h4>{skill.name}</h4>

            </motion.div>
          );

        })}

      </motion.div>

    </motion.div>
  );
}

export default SkillCategory;