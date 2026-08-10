function CertificationCard({ certification }) {

  const Icon = certification.icon;

  return (

    <div className="cert-card">

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

  );
}

export default CertificationCard;