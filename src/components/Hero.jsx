import ProfilePhoto from "./ProfilePhoto.jsx";

const links = {
  github: "https://github.com/idocarmi1",
  linkedin: "https://www.linkedin.com/in/idocarmi011",
  email: "mailto:idocarmi011@gmail.com",
  resume: "/resume/Ido-Carmi-Resume.pdf",
};

const heroTags = ["NOC Operations", "Linux", "Networking", "DevSecOps", "AI Automation"];

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
              NOC Engineer | Linux & Networking | DevSecOps | AI Automation
            </p>
          </div>
        </div>
        <div className="hero-tags" aria-label="Core professional focus areas">
          {heroTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="hero-subtitle">
          Building my path from NOC and infrastructure operations into DevOps, Cloud, and
          AI-powered automation.
        </p>
        <p className="hero-copy">
          Hands-on experience in network operations, Linux, monitoring, troubleshooting, and
          enterprise infrastructure. Currently focused on DevOps, CI/CD, Docker, Terraform, AWS
          concepts, and AI automation for NOC/DevOps workflows.
        </p>
        <div className="hero-actions" aria-label="Primary portfolio links">
          <a className="button primary" href={links.github} target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <a className="button secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a className="button secondary" href="#projects">
            View Projects
          </a>
          <a className="button ghost" href={links.resume} download>
            Download Resume
          </a>
        </div>
        <div className="hero-terminal" aria-label="Portfolio focus terminal accent">
          <span className="terminal-dot" />
          <code>noc-ops</code>
          <span>monitoring</span>
          <span>troubleshooting</span>
          <span>automation</span>
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
            <p>Operations experience</p>
            <p>DevOps learning path</p>
            <p>AI automation direction</p>
          </div>
        </div>
        <div className="status-card">
          <span className="pulse-dot" />
          <span>Open to student and junior DevOps opportunities</span>
        </div>
        <div className="signal-grid">
          <div>
            <span className="metric">NOC</span>
            <p>Production operations, monitoring, incidents</p>
          </div>
          <div>
            <span className="metric">Linux</span>
            <p>Systems, logs, services, troubleshooting</p>
          </div>
          <div>
            <span className="metric">DevOps</span>
            <p>CI/CD, Docker, Terraform, cloud concepts</p>
          </div>
          <div>
            <span className="metric">AIOps</span>
            <p>Mock incident assistant and automation direction</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
