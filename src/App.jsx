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

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("theme", theme);

  }, [theme]);

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
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />

    </>
  );
}

export default App;