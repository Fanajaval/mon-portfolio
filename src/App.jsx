import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // État du thème
  const [theme, setTheme] = useState("light");

  // Chargement du thème sauvegardé
  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }

  }, []);

  // Application du thème sur la page
  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("theme", theme);

  }, [theme]);

  // Fonction de bascule
  const toggleTheme = () => {
    setTheme(
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />

    </>
  );
}

export default App;