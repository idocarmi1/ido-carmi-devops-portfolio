import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Hero from "./components/Hero.jsx";
import Notes from "./components/Notes.jsx";
import Projects from "./components/Projects.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Skills from "./components/Skills.jsx";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Project", "#featured-project"],
  ["Projects", "#projects"],
  ["Roadmap", "#roadmap"],
  ["Notes", "#notes"],
  ["Contact", "#contact"],
];

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ido Carmi portfolio home">
          <span className="brand-mark">IC</span>
          <span>Ido Carmi</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Roadmap />
        <Notes />
        <Contact />
      </main>
    </div>
  );
}

export default App;
