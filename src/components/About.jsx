import SectionHeader from "./SectionHeader.jsx";
import ProfilePhoto from "./ProfilePhoto.jsx";

function About() {
  return (
    <section className="section" id="about">
      <SectionHeader eyebrow="Professional Background" title="About Me">
        Honest operations experience, focused learning, and a practical DevOps direction.
      </SectionHeader>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I am a NOC Engineer with hands-on experience in enterprise networking, monitoring,
            troubleshooting, Linux environments, and infrastructure operations.
          </p>
          <p>
            My background includes working with production systems, network incidents, firewalls,
            monitoring tools, and communication infrastructure. I also have military experience in
            network management and technical team leadership.
          </p>
          <p>
            Today, I am expanding my career toward DevOps, Cloud Infrastructure, CI/CD automation,
            Docker, Terraform, and AI-powered automation for NOC and DevOps workflows.
          </p>
          <p>
            My goal is to combine my operational experience with modern DevOps tools and AI
            automation in order to build practical solutions that help teams troubleshoot faster,
            automate repetitive work, and improve infrastructure reliability.
          </p>
        </div>

        <div className="about-side">
          <ProfilePhoto variant="about-photo" />
          <div className="focus-list" aria-label="Current focus areas">
            <div>
              <span>01</span>
              <p>NOC, monitoring, incidents, and infrastructure troubleshooting</p>
            </div>
            <div>
              <span>02</span>
              <p>Linux, networking, documentation, and operational reliability</p>
            </div>
            <div>
              <span>03</span>
              <p>DevOps foundations with Docker, Jenkins, Terraform, and cloud concepts</p>
            </div>
            <div>
              <span>04</span>
              <p>AI automation ideas for incident analysis, summaries, and escalation workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
