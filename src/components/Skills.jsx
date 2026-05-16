import { skills } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";

function Skills() {
  return (
    <section className="section section-band" id="skills">
      <SectionHeader eyebrow="Toolbox" title="Technical Skills">
        Practical technical areas shaped by NOC work and a focused DevOps learning path.
      </SectionHeader>

      <div className="card-grid skills-grid">
        {skills.map((group) => (
          <article className="card skill-card" key={group.title}>
            <h3>{group.title}</h3>
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
