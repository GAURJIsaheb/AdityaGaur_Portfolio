import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import project1 from ".././assets/project1.jpg"
import project2 from ".././assets/project2.jpg"
import project3 from ".././assets/project3.jpg"

const projects = [
  {
    title: "Task Management Application",
    category: "Full-stack Web App",
    duration: "2 Months",
    tools: "React.js · Express.js · IndexedDB · JWT",
    highlights: [
      "Built a full-stack task management dashboard with DM operations and an intuitive UI.",
      "Implemented offline-first data sync using IndexedDB and local storage for reliable tracking.",
      "Designed a hybrid synchronization engine with pending queues and polling to keep local changes in sync.",
      "Secured structured RESTful APIs with JWT authentication for per-user task management."
    ],
    image: project3,
  },
  {
    title: "AI ShortsGenerator",
    category: "AI-powered Content Tool",
    duration: "2 Months",
    tools: "Next.js · OpenAI API · Vercel · TypeScript",
    highlights: [
      "Developed a short-form video script generator for social media creators using OpenAI prompts.",
      "Optimized the interface for 25% faster load times and smoother prompt-feedback loops.",
      "Automated deployment to aiproject-voad.vercel.app with edge caching for quick demos."
    ],
    image:project2,
  },
  {
    title: "SmartFinance",
    category: "AI Expense Tracker",
    duration: "1 Month",
    tools: "React.js · Node.js · AI Insights",
    highlights: [
      "Built an AI-based tracker that categorizes spending patterns and surfaces saving opportunities.",
      "Enabled automated bill payments for 100+ users, reducing late fees by 15% and speeding transactions by 40%.",
      "Deployed the web experience at smart-finance-rose.vercel.app with responsive visuals."
    ],
    image: project1,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category} · {project.duration}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <ul className="project-highlights">
                          {project.highlights.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
