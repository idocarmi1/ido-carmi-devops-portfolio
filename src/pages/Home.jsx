import Hero from "../components/Hero.jsx";

const previewCards = [
  {
    title: "Network Operations",
    text: "4 years of NOC and network operations experience with monitoring, troubleshooting, incidents, vendors, and production systems.",
  },
  {
    title: "Information Systems",
    text: "Studying Business Administration & Information Systems with a practical focus on technology, business processes, and systems thinking.",
  },
  {
    title: "DevOps & Cyber Direction",
    text: "Building a professional path toward DevOps, networking, cyber, product, and information systems roles.",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <section className="section home-preview" aria-labelledby="home-preview-title">
        <div className="section-header">
          <p className="eyebrow">Portfolio Overview</p>
          <h2 id="home-preview-title">Professional Focus</h2>
          <p>
            A concise overview of my background, technical direction, and current career focus.
          </p>
        </div>
        <div className="card-grid">
          {previewCards.map((card) => (
            <article className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <article className="home-project-highlight">
          <div>
            <span className="project-category-badge">AI & Business Automation</span>
            <h3>AutoBiz AI Advisor</h3>
            <p>
              Hebrew AI business automation advisor demo that connects market research,
              automation opportunity discovery, scoring, and practical recommendations into a
              recruiter-friendly product concept.
            </p>
          </div>
          <div className="badge-list">
            {["React", "Vite", "AI Demo", "Business Automation", "RTL Hebrew UI"].map((tech) => (
              <span className="badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <a
              className="button primary compact"
              href="https://ai-business-automation-advisor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
            </a>
            <a
              className="button secondary compact"
              href="https://github.com/idocarmi1/ai-business-automation-advisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;
