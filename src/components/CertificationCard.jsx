import { motion } from "framer-motion";

function CertificationCard({ certification }) {
  const Icon = certification.icon;

  return (
    <motion.article
      className="cert-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
    >

      {/* Image de l'attestation */}
      <div className="cert-image-container">
        <img
          src={certification.image}
          alt={`Attestation ${certification.title}`}
          className="cert-image"
        />
      </div>

      {/* Informations */}
      <div className="cert-info">

        <div
          className="cert-icon"
          style={{ color: certification.color }}
        >
          <Icon />
        </div>

        <div className="cert-content">

          <span className="cert-period">
            {certification.period}
          </span>

          <h3>{certification.title}</h3>

          <p>{certification.organization}</p>

        </div>

      </div>

    </motion.article>
  );
}

export default CertificationCard;