import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech <br/> in Computer Science Engineering</h4>
                <h5>Bhagwan Parshuram Institute of Technology</h5>
              </div>
              <h3>Aug 2022 - May 2026</h3>
            </div>
            <p>
              Concentrated on scalable systems, distributed computing, and full-stack projects while co-authoring hackathon submissions and mentoring juniors on modern JS tooling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Veersa Technologies</h5>
              </div>
              <h3>Oct 2025 – Dec 2025</h3>
            </div>
            <p>Worked as a backend-focused developer contributing to scalable application development. Built and optimized APIs, handled database design and integrations, and implemented real-world features involving authentication, data flow, and system performance. Gained hands-on experience with production-level architecture, debugging, and writing maintainable code in a collaborative environment.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer Intern</h4>
                <h5>Restroworks</h5>
              </div>
              <h3>Jan 2026 – Mar 2026</h3>
            </div>
            <p>Contributed to developing and improving restaurant management solutions, focusing on backend systems and data handling. Worked on features related to order management, user workflows, and system integrations. Enhanced understanding of real-time operations, business logic implementation, and building reliable systems for high-usage environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
