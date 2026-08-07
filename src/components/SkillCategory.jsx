import { motion } from "framer-motion";


const containerVariants = {

  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },

  },

};


const itemVariants = {

  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },

  },

};


function SkillCategory({ title, items }) {

  return (

    <div className="skill-category">

      <h3>{title}</h3>
      
      <motion.div

        className="skills-grid"

        variants={containerVariants}

        initial="hidden"

        whileInView="visible"

        viewport={{ once: true }}

      >

        {items.map((skill) => {


          const Icon = skill.icon;


          return (

            <motion.div

              className="skill-card"

              key={skill.name}

              variants={itemVariants}

            >

              <Icon

                className="skill-icon"

                style={{ color: skill.color }}

              />


              <h4>{skill.name}</h4>


            </motion.div>

          );


        })}


      </motion.div>


    </div>

  );

}


export default SkillCategory;