import SectionHeader from "./SectionHeader.jsx";

const architectureNodes = [
  {
    label: "01",
    title: "Visitor",
    description: "Uses the portfolio interface",
  },
  {
    label: "02",
    title: "React Frontend",
    description: "Presents UI and project experience",
  },
  {
    label: "03",
    title: "Express Backend",
    description: "Handles API logic and services",
  },
  {
    label: "04",
    title: "AI Assistant",
    description: "Simulates incident analysis and recommendations",
  },
  {
    label: "05",
    title: "Docker",
    description: "Packages frontend and backend services",
  },
  {
    label: "06",
    title: "Jenkins",
    description: "Automates build and delivery flow",
  },
  {
    label: "07",
    title: "Terraform / AWS",
    description: "Represents infrastructure provisioning",
  },
  {
    label: "08",
    title: "Monitoring",
    description: "Connects to NOC and operations mindset",
  },
];

const aiProductFlow = [
  {
    title: "Business Input",
    description: "User describes the business, audience, and operational challenge",
  },
  {
    title: "AI Market Research",
    description: "Perplexity-style research lens maps market signals and context",
  },
  {
    title: "Pain Points",
    description: "The product identifies friction, manual work, and opportunity areas",
  },
  {
    title: "Automation Table",
    description: "Recommendations are organized with scoring and practical detail",
  },
  {
    title: "Recommended Tools",
    description: "The flow suggests tools that fit the business problem",
  },
  {
    title: "Next Steps",
    description: "Clear actions turn research into an automation implementation path",
  },
];

function ProjectArchitecture() {
  return (
    <section className="section architecture-section" aria-labelledby="project-architecture-title">
      <SectionHeader eyebrow="System Map" title="Project Architecture">
        High-level flow showing how the portfolio project connects frontend, backend, automation,
        CI/CD, infrastructure, and operations thinking.
      </SectionHeader>

      <div className="architecture-card">
        <div className="architecture-flow" aria-label="AI-Powered DevSecOps CI/CD Pipeline architecture flow">
          {architectureNodes.map((node, index) => (
            <article className="architecture-node" key={node.title}>
              <span className="architecture-label">{node.label}</span>
              <div>
                <h3>{node.title}</h3>
                <p>{node.description}</p>
              </div>
              {index < architectureNodes.length - 1 && <span className="architecture-arrow" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>

      <div className="ai-product-flow-card" aria-label="AutoBiz AI Advisor product flow">
        <div className="flow-card-heading">
          <p className="eyebrow">AI & Business Automation</p>
          <h3>AutoBiz AI Advisor Product Flow</h3>
          <p>
            Business Input to AI Market Research to Pain Points to Automation Table to
            Recommended Tools to Next Steps.
          </p>
        </div>
        <div className="ai-product-flow">
          {aiProductFlow.map((node, index) => (
            <article className="ai-flow-node" key={node.title}>
              <span className="ai-flow-index">{String(index + 1).padStart(2, "0")}</span>
              <h4>{node.title}</h4>
              <p>{node.description}</p>
              {index < aiProductFlow.length - 1 && <span className="ai-flow-arrow" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectArchitecture;
