import { FaTrophy } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devhuntImage from "../assets/images/certifications/devhunt.png";

function DistinctionCard() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <motion.div
        className="distinction-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="distinction-content">
          <div className="distinction-badge">
            <FaTrophy className="distinction-icon" />
            <span className="distinction-rank">3e place</span>
          </div>
          <h3 className="distinction-title">DevHunt 2026</h3>
          <p className="distinction-org">ENI Fianarantsoa</p>
          <p className="distinction-date">Juillet 2026</p>
          <p className="distinction-type">Concours de développement</p>
          <button className="distinction-btn" onClick={openModal}>
            Voir la preuve
          </button>
        </div>
      </motion.div>

      {showModal && (
        <div className="cert-modal" onClick={handleBackdropClick}>
          <motion.div
            className="cert-modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="cert-modal-close" onClick={closeModal}>
              X
            </button>
            <img src={devhuntImage} alt="Certificat DevHunt 2026" className="cert-modal-image" />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default DistinctionCard;
