import { autoBizFeaturedProject, featuredProject } from "../data/projects.js";
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
      <SectionHeader eyebrow="Featured Work" title="Featured Projects">
        Premium project highlights connecting DevOps, NOC operations, AI automation, and practical
        business problem solving.
      </SectionHeader>

      <div className="featured-stack">
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
              <a className="button primary" href={featuredProject.repo} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              <a className="button secondary" href={featuredProject.repo} target="_blank" rel="noopener noreferrer">
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

        <div className="featured-layout autobiz-featured">
          <div className="featured-copy">
            <span className="highlight-pill gold">{autoBizFeaturedProject.label}</span>
            <div>
              <h3>{autoBizFeaturedProject.name}</h3>
              <p className="featured-subtitle">{autoBizFeaturedProject.subtitle}</p>
            </div>
            <p>{autoBizFeaturedProject.description}</p>
            <div className="badge-list">
              {autoBizFeaturedProject.tech.map((item) => (
                <span className="badge cyan" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="ai-feature">
              <h4>{autoBizFeaturedProject.featureTitle}</h4>
              <p>{autoBizFeaturedProject.featureText}</p>
            </div>

            <div className="button-row">
              <a
                className="button primary"
                href={autoBizFeaturedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo
              </a>
              <a
                className="button secondary"
                href={autoBizFeaturedProject.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
          </div>

          <div className="screenshot-placeholder autobiz-preview" aria-label="AutoBiz AI Analysis Preview">
            <div className="mock-window autobiz-mock" role="img" aria-label="AutoBiz AI Analysis Preview dashboard">
              <div className="mock-window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-content">
                <p className="mock-label">AutoBiz AI Analysis Preview</p>
                <div className="autobiz-input-grid" dir="rtl">
                  <span>Input: קליניקה</span>
                  <span>Goal: חיסכון בזמן</span>
                </div>
                <div className="autobiz-recommendation" dir="rtl">
                  <span>Recommendation</span>
                  <strong>אוטומציה של מעקב אחרי לקוחות ותזכורות</strong>
                </div>
                <div className="autobiz-score">
                  <div>
                    <span>Score</span>
                    <strong>92/100</strong>
                  </div>
                  <div className="autobiz-score-bar" aria-hidden="true">
                    <span />
                  </div>
                </div>
                <div className="autobiz-tools">
                  {["Make", "Zapier", "CRM", "Google Sheets"].map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
