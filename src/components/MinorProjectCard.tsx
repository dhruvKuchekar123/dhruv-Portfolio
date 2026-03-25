import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./styles/MinorProjects.css";

interface MinorProjectCardProps {
  title: string;
  video?: string;
  image?: string;
  gitLink: string;
  category: string;
}

const MinorProjectCard: React.FC<MinorProjectCardProps> = ({ title, video, image, gitLink, category }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="minor-project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-container">
        {image ? (
          <img src={image} alt={title} className="project-video" />
        ) : (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            className="project-video"
          />
        )}
        <div className={`video-overlay ${isHovered ? "hovered" : ""}`}></div>
      </div>
      <div className="project-info">
        <div className="project-header">
          <h4 className="project-title">{title}</h4>
          <p className="project-category">{category}</p>
        </div>
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-code-btn"
          data-cursor="disable"
        >
          <FaGithub /> View Code
        </a>
      </div>
    </div>
  );
};

export default MinorProjectCard;
