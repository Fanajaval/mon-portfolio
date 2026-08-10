import "../styles/Navbar.css"

function Navbar(){
    return(
        <header className="header">
            <nav className="navbar">
                <div className="logo">FV</div>

                <ul className="nav-links">
                    <li>
                        <a href="#hero">Accueil</a>
                    </li>

                    <li>
                        <a href="#about">A propos</a>
                    </li>

                    <li>
                        <a href="#skills">Compétences</a>
                    </li>

                    <li>
                        <a href="#projects">Projets</a>
                    </li>

                    <li>
                        <a href="#education">Education</a>
                    </li>

                    <li>
                        <a href="#certifications">Certifications</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;