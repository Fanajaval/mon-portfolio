import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import "../styles/Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <h2 className="section-title">
        Certifications
      </h2>

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