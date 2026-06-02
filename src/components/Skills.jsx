import { skills } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";

const skillMarkers = {
  Networking: "NET",
  Systems: "SYS",
  Tools: "TLS",
  "Security / Vendors": "SEC",
};

function Skills() {
  return (
    <section className="section section-band" id="skills">
      <SectionHeader eyebrow="Toolbox" title="Technical Skills">
        Practical technical areas shaped by NOC work, network operations, systems, vendors, and
        modern DevOps tooling.
      </SectionHeader>

      <div className="card-grid skills-grid">
        {skills.map((group) => (
          <article className="card skill-card" key={group.title}>
            <div className="skill-card-header">
              <span className="skill-marker">{skillMarkers[group.title]}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="badge-list">
              {group.items.map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
