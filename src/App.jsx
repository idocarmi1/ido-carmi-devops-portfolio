import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const routes = {
  "/": <Home />,
  "/about": <AboutPage />,
  "/skills": <SkillsPage />,
  "/experience": <ExperiencePage />,
  "/projects": <ProjectsPage />,
  "/contact": <ContactPage />,
};

function getCurrentPath() {
  return window.location.pathname in routes ? window.location.pathname : "/";
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);
  const currentPage = routes[currentPath] || routes["/"];

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getCurrentPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || link.target || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href);
      if (url.origin !== window.location.origin || !(url.pathname in routes)) {
        return;
      }

      event.preventDefault();
      if (url.pathname !== window.location.pathname) {
        window.history.pushState({}, "", url.pathname);
        setCurrentPath(url.pathname);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const navigate = (path) => (event) => {
    event.preventDefault();
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="/" onClick={navigate("/")} aria-label="Ido Carmi portfolio home">
          <span className="brand-mark">IC</span>
          <span>Ido Carmi</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, path]) => (
            <a
              aria-current={currentPath === path ? "page" : undefined}
              href={path}
              key={path}
              onClick={navigate(path)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-main" id="main-content">
        {currentPage}
      </main>
    </div>
  );
}

export default App;
