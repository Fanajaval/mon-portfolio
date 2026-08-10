import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import "../styles/Certifications.css";
import { motion } from "framer-motion";

function Certifications() {
  return (
    <section id="certifications" className="certifications">

      <motion.div
        className="certifications-heading"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <span className="certifications-label">
          FORMATIONS SUPPLÉMENTAIRES
        </span>

        <h2 className="section-title">
          Mes <span>certifications</span>
        </h2>

        <div className="certifications-line"></div>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>

    </section>
  );
}

export default Certifications;