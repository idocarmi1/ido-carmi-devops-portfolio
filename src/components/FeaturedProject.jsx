import { featuredProject } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";
import { useState } from "react";

const aiOutputs = [
  "Incident summary",
  "Severity level",
  "Possible root cause",
  "Recommended checks",
  "Escalation message",
];

function FeaturedProject() {
  const [screenshotAvailable, setScreenshotAvailable] = useState(true);

  return (
    <section className="section featured-section" id="featured-project">
      <SectionHeader eyebrow="Featured Project" title="AI-Powered DevSecOps CI/CD Pipeline">
        A credible portfolio project connecting DevOps delivery with NOC-style incident thinking.
      </SectionHeader>

      <div className="featured-layout">
        <div className="featured-copy">
          <span className="highlight-pill">Main portfolio highlight</span>
          <h3>{featuredProject.name}</h3>
          <p>{featuredProject.description}</p>
          <p>{featuredProject.details}</p>
          <div className="badge-list">
            {featuredProject.tech.map((item) => (
              <span className="badge cyan" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="ai-feature">
            <h4>AI Incident Assistant</h4>
            <p>
              A mock AI workflow prepared for future OpenAI API integration. It analyzes alert or
              incident text and returns:
            </p>
            <ul>
              {aiOutputs.map((output) => (
                <li key={output}>{output}</li>
              ))}
            </ul>
          </div>

          <div className="button-row">
            <a className="button primary" href={featuredProject.repo} target="_blank" rel="noreferrer">
              View Project
            </a>
            <a className="button secondary" href={featuredProject.repo} target="_blank" rel="noreferrer">
              View GitHub Repository
            </a>
          </div>
        </div>

        <div className="screenshot-placeholder" aria-label="AI Incident Assistant screenshot">
          {screenshotAvailable ? (
            <img
              src="/screenshots/ai-incident-assistant.png"
              alt="AI Incident Assistant Screenshot"
              decoding="async"
              loading="lazy"
              onError={() => setScreenshotAvailable(false)}
            />
          ) : (
            <div className="mock-window" role="img" aria-label="AI Incident Assistant screenshot placeholder">
              <div className="mock-window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-content">
                <p className="mock-label">AI Incident Assistant Screenshot</p>
                <div className="mock-alert">BGP session down between edge router and provider</div>
                <div className="mock-result">
                  <span>Severity: High</span>
                  <span>Root cause: Routing or provider link issue</span>
                  <span>Next checks: Interface, logs, BGP neighbor state</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
