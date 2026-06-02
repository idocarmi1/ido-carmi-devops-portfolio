import ProfilePhoto from "./ProfilePhoto.jsx";

const links = {
  github: "https://github.com/idocarmi1",
  linkedin: "https://www.linkedin.com/in/idocarmi011",
  email: "mailto:idocarmi011@gmail.com",
  resume: "/resume/Ido-Carmi-Resume.pdf",
};

const heroTags = ["Network Operations", "DevOps", "Cyber", "Product", "Information Systems"];

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <div className="hero-identity">
          <ProfilePhoto variant="hero-photo" />
          <div>
            <p className="eyebrow">Ido Carmi DevOps Portfolio</p>
            <h1>Ido Carmi</h1>
            <p className="hero-title">
              Information Systems Student | Network Engineer | DevOps & Cyber Enthusiast
            </p>
          </div>
        </div>
        <div className="hero-tags" aria-label="Core professional focus areas">
          {heroTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="hero-subtitle">
          Formal portfolio focused on networking, NOC operations, DevOps foundations, cyber
          awareness, product thinking, and information systems.
        </p>
        <p className="hero-copy">
          4 years of hands-on experience in network operations, monitoring, troubleshooting,
          incidents, vendors, and production systems, combined with academic studies in Business
          Administration & Information Systems.
        </p>
        <div className="hero-actions" aria-label="Primary portfolio links">
          <a className="button primary" href="/projects">
            View Projects
          </a>
          <a className="button secondary" href="/contact">
            Contact Me
          </a>
          <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button ghost" href={links.resume} download>
            Download Resume
          </a>
        </div>
        <div className="hero-terminal" aria-label="Portfolio focus terminal accent">
          <span className="terminal-dot" />
          <code>network-ops</code>
          <span>monitoring</span>
          <span>troubleshooting</span>
          <span>cyber-aware operations</span>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Professional focus">
        <div className="hero-system-card">
          <div className="system-card-header">
            <span>Portfolio Signal</span>
            <strong>Online</strong>
          </div>
          <div className="network-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="system-card-body">
            <p>Network operations experience</p>
            <p>Information systems student</p>
            <p>DevOps and cyber direction</p>
          </div>
        </div>
        <div className="status-card">
          <span className="pulse-dot" />
          <span>Open to student and junior DevOps opportunities</span>
        </div>
        <div className="signal-grid">
          <div>
            <span className="metric">4Y</span>
            <p>NOC and network operations experience</p>
          </div>
          <div>
            <span className="metric">NET</span>
            <p>BGP, MPLS, VRF, VLANs, routing, switching</p>
          </div>
          <div>
            <span className="metric">DEV</span>
            <p>Docker, Jenkins, GitHub, CI/CD foundations</p>
          </div>
          <div>
            <span className="metric">IS</span>
            <p>Business Administration & Information Systems</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
