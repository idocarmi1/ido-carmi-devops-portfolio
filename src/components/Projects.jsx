import { projects } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";

function Projects() {
  return (
    <section className="section section-band" id="projects">
      <SectionHeader eyebrow="GitHub Work" title="Projects">
        Professional portfolio projects focused on DevOps, automation, business workflows, and
        presentation quality.
      </SectionHeader>

      <div className="card-grid projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="badge-list">
              {project.tech.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            {project.repo && (
              <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">
                {project.linkLabel || "GitHub Repository"}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
