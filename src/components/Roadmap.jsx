import { roadmap } from "../data/roadmap.js";
import SectionHeader from "./SectionHeader.jsx";

function Roadmap() {
  return (
    <section className="section" id="roadmap">
      <SectionHeader eyebrow="Learning Path" title="My DevOps & AI Automation Learning Roadmap">
        A structured path from strong operations foundations into cloud, DevOps, and AIOps.
      </SectionHeader>

      <div className="roadmap">
        {roadmap.map((item, index) => (
          <article className="roadmap-item" key={item.stage}>
            <div className="roadmap-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.stage}</strong>
            </div>
            <div className="roadmap-card">
              <h3>{item.title}</h3>
              <p>{item.topics}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
