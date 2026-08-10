import "../styles/Education.css";

function Education() {
  return (
    <section className="education" id="education">
        <h2 className="section-title">Formation</h2>

        <div className="education-list">

            <div className="education-item">
            <span>2025–2026</span>
            <h3>L3 Génie Logiciel et Base de Données</h3>
            <p>ENI Fianarantsoa</p>
            </div>

            <div className="education-item">
            <span>2023–2025</span>
            <h3>L1–L2 Génie Logiciel et Base de Données</h3>
            <p>ENI Fianarantsoa</p>
            </div>

            <div className="education-item">
            <span>2022–2023</span>
            <h3>L1 Mathématiques et Informatique</h3>
            <p>Université d’Antananarivo</p>
            </div>

        </div>
        </section>
  );
}

export default Education;