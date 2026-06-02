import SectionHeader from "./SectionHeader.jsx";
import ProfilePhoto from "./ProfilePhoto.jsx";

function About() {
  return (
    <section className="section" id="about">
      <SectionHeader eyebrow="Professional Background" title="About Me">
        Network operations background, formal information systems studies, and a practical DevOps
        and cyber direction.
      </SectionHeader>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I am an Information Systems student and Network Engineer with 4 years of experience at
            Pelephone in NOC and network operations.
          </p>
          <p>
            My background includes monitoring, troubleshooting, network systems, incidents,
            vendors, operational communication, and working under pressure in production
            environments.
          </p>
          <p>
            I am studying Business Administration & Information Systems and building my
            professional path toward DevOps, networking, cyber, product, and information systems
            roles.
          </p>
          <p>
            My goal is to combine real operations experience with modern technical tools, business
            understanding, and practical automation in order to support reliable systems and clear
            operational decision-making.
          </p>
        </div>

        <div className="about-side">
          <ProfilePhoto variant="about-photo" />
          <div className="focus-list" aria-label="Current focus areas">
            <div>
              <span>01</span>
              <p>4 years at Pelephone in NOC and network operations</p>
            </div>
            <div>
              <span>02</span>
              <p>Monitoring, troubleshooting, incidents, vendors, and pressure handling</p>
            </div>
            <div>
              <span>03</span>
              <p>Business Administration & Information Systems student</p>
            </div>
            <div>
              <span>04</span>
              <p>Focused on DevOps, networking, cyber, product, and information systems roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
