import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ADITYA
              <br />
              <span>GAUR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Software Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full-stack Web</div>
              <div className="landing-h2-2">AI Tooling</div>
            </h2>
            <h2>
              <div className="landing-h2-info">B.Tech, Bhagwan Parshuram Institute of Technology</div>
              <div className="landing-h2-info-1">Delhi, India</div>
            </h2>
            <p className="landing-summary">
              Building resilient, offline-friendly platforms and AI-enhanced experiences with TypeScript, Node.js, and modern design systems.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
