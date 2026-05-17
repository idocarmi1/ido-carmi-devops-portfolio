import SectionHeader from "./SectionHeader.jsx";

const contactLinks = {
  email: "mailto:idocarmi011@gmail.com",
  github: "https://github.com/idocarmi1",
  linkedin: "https://www.linkedin.com/in/idocarmi011",
};

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeader eyebrow="Contact" title="Contact">
        I am currently looking for student or junior opportunities in DevOps, Linux, Cloud,
        Infrastructure, NOC Automation, and AI-powered operations.
      </SectionHeader>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Let&apos;s connect</h3>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={contactLinks.email}>idocarmi011@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={contactLinks.github} target="_blank" rel="noreferrer">
                  github.com/idocarmi1
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/idocarmi011
                </a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Ramat Gan, Israel</dd>
            </div>
          </dl>
          <div className="button-row">
            <a className="button primary" href={contactLinks.email}>
              Email Me
            </a>
            <a className="button secondary" href={contactLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button secondary" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="resume-card">
          <p className="eyebrow">Resume</p>
          <h3>Download Resume</h3>
          <p>
            The resume button is wired to <code>public/resume/Ido-Carmi-Resume.pdf</code>.
          </p>
          <a className="button ghost" href="/resume/Ido-Carmi-Resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
