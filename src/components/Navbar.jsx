import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">FV</div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Éducation</a></li>
          <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;