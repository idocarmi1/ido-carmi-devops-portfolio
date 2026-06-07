import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

const categoryOrder = ["DevOps / CI-CD", "AI & Business Automation", "Portfolio / Frontend"];

const projectsByCategory = categoryOrder.map((category) => ({
  category,
  items: projects.filter((project) => project.category === category),
}));

function Projects() {
  return (
    <section className="section section-band" id="projects">
      <SectionHeader eyebrow="GitHub Work" title="Projects">
        Professional portfolio projects focused on DevOps, automation, business workflows, and
        presentation quality.
      </SectionHeader>

      <div className="project-category-stack">
        {projectsByCategory.map(
          ({ category, items }) =>
            items.length > 0 && (
              <div className="project-category-group" key={category}>
                <div className="project-category-heading">
                  <span>{category}</span>
                </div>
                <div className="card-grid projects-grid">
                  {items.map((project) => {
                    const links =
                      project.links ||
                      (project.repo
                        ? [
                            {
                              label: project.linkLabel || "View Repository",
                              url: project.repo,
                              variant: "text",
                            },
                          ]
                        : []);

                    return (
                      <article
                        className={`card project-card${project.isFeatured ? " featured-project-card" : ""}`}
                        key={project.name}
                      >
                        <div className="project-card-copy">
                          <span className="project-category-badge">{project.category}</span>
                          <h3>{project.name}</h3>
                          <p>{project.description}</p>
                          {project.context && <p className="project-context">{project.context}</p>}
                        </div>
                        <div className="badge-list">
                          {project.tech.map((tech) => (
                            <span className="badge" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        {links.length > 0 && (
                          <div className="project-actions">
                            {links.map((link) => (
                              <a
                                className={
                                  link.variant === "primary"
                                    ? "button primary compact"
                                    : link.variant === "secondary"
                                      ? "button secondary compact"
                                      : "text-link"
                                }
                                href={link.url}
                                key={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}

export default Projects;
