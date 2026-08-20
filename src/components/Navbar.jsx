import { useEffect, useState } from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import "../styles/Navbar.css";

const navItems = [
  { id: "hero", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "education", label: "Formation" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Navbar({ theme, toggleTheme }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

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
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            </div>


        <ul id="main-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}

        </ul>

      </nav>

    </header>

  );
}

export default Navbar;