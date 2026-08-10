import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import {FaJava} from  "react-icons/fa6";
import Projects from "./components/Projects";
import Education  from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <FaJava className="skill-icon" />
      <Projects/>
      <Education/>
      <Certifications/>
      <Contact/>
    </>
  );
}

export default App;
