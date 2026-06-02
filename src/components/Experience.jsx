import SectionHeader from "./SectionHeader.jsx";

const experience = [
  {
    company: "Pelephone",
    role: "Network Engineer / NOC",
    details:
      "Network operations, monitoring, troubleshooting, incidents, vendors, production systems, and work under pressure.",
  },
  {
    company: "Israeli Air Force",
    role: "Network Manager",
    details: "Network management, technical responsibility, and operational communication.",
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader eyebrow="Experience" title="Professional Experience">
        Practical operations background across telecom and military network environments.
      </SectionHeader>

      <div className="experience-grid">
        {experience.map((item) => (
          <article className="experience-card" key={item.company}>
            <span className="experience-company">{item.company}</span>
            <h3>{item.role}</h3>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
