import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const majorProjects = [
  {
    title: "Wanderlust",
    category: "Property Listing Web App",
    tools: "Node.js, Express, MongoDB, Map APIs, MVC",
    image: "/images/Wanderlust/wanderlust image 1.png",
    liveLink: "https://wanderlust-1-ca6k.onrender.com/listings",
    gitLink: "https://github.com/dhruvKuchekar123/Wanderlust",
    features: [
      "Designed a full-stack web application enabling users to create, update, and manage property listings.",
      "Integrated CRUD functionality, image uploads, and Map APIs for location-based discovery.",
      "Developed RESTful APIs using Node.js and Express following MVC architecture.",
      "Managed deployment using MongoDB Atlas and Render for scalable cloud hosting."
    ]
  },
  {
    title: "SmartSathi",
    category: "AI Chatbot Application",
    tools: "MERN Stack, OpenAI API, Session Tracking",
    image: "/images/SmartSathi.png",
    gitLink: "https://github.com/dhruvKuchekar123/SmartSathi",
    features: [
      "Developed an AI-powered chatbot using MERN stack and OpenAI API for real-time conversations.",
      "Structured multi-session chat architecture with thread-based conversation handling.",
      "Built an end-to-end pipeline from user input to AI response delivery.",
      "Designed an interactive chat interface with session tracking and history management."
    ]
  },
  {
    title: "Stock Trading Platform",
    category: "Simulation & Portfolio Tracking",
    tools: "React.js, Node.js, MongoDB, REST APIs",
    image: "/images/StockFlow/stockflow image.png",
    gitLink: "https://github.com/dhruvKuchekar123/Stock-Trading-Platform",
    features: [
      "Built a stock trading simulation platform supporting portfolio tracking and trade execution.",
      "Developed secure authentication, session management, and transaction workflows.",
      "Created REST APIs for order processing, trade history, and analytics.",
      "Optimized database queries to improve response time and backend efficiency.",
      "Designed a responsive React-based interface for real-time user interaction."
    ]
  },
  {
    title: "SyncDub",
    category: "Synchronized AI Video Dubbing",
    tools: "Python, Meta MMS, Edge-TTS, Deep-Translator",
    image: "/images/SyncDub/syncdub demo.png",
    gitLink: "https://github.com/dhruvKuchekar123/SyncDub-AI-based-Audio-Video-Dubbing-and-Lip-Syncing",
    features: [
      "Built an end-to-end speech-to-speech AI pipeline to dub videos from Hindi to Marathi using Whisper ASR, neural translation, and Wav2Lip.",
      "Implemented automatic speech recognition (ASR) using Whisper for transcribing noisy multilingual audio with segment-level timestamps.",
      "Designed a pipeline for speech-to-text → translation → neural text-to-speech, enabling realistic cross-lingual voice generation.",
      "Integrated Edge TTS with speaker-aware gender adaptation using pitch detection (Librosa) to improve voice naturalness.",
      "Applied audio preprocessing (16kHz mono normalization) to improve model compatibility and reduce inference errors.",
      "Developed lip synchronization using Wav2Lip, aligning generated Marathi speech with facial movements in video.",
      "Engineered a scalable backend using FastAPI and integrated with a React frontend for real-time video processing."
    ]
  },
];


const ProjectCarousel = ({ title, projects }: { title: string; projects: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || projects.length === 0) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, projects.length]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);


  if (projects.length === 0) return null;

  return (
    <>
      <div className="work-container section-container" style={{ marginBottom: "80px" }}>
        <h2 className="project-type-title">
          {title.split(" ")[0]} <span>{title.split(" ")[1]}</span>
        </h2>

        <div className="carousel-wrapper">
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
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        
                        {project.features && (
                          <div className="carousel-features">
                            <ul className="features-list">
                              {project.features.map((feature: string, fIndex: number) => (
                                <li key={fIndex} className="feature-item">{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Techstack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="project-links">
                          {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                          )}
                          {project.gitLink && (
                            <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="project-link">
                              <FaGithub /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.liveLink}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

import MinorProjects from "./MinorProjects";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <ProjectCarousel title="Major Projects" projects={majorProjects} />
      <MinorProjects />
    </div>
  );
};

export default Work;
