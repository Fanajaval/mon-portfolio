import { useState } from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="header">

      <nav className="navbar">

        <a href="#hero" className="logo">
          FV
        </a>


        <div className="nav-actions">
            <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label="Changer le thème"
            >
                {theme === "light"
                ? <FaMoon />
                : <FaSun />}
            </button>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Ouvrir le menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            </div>


        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              À propos
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Compétences
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projets
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Formation
            </a>
          </li>

          <li>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

      </nav>

    </header>

  );
}

export default Navbar;