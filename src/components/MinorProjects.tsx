import React from "react";
import MinorProjectCard from "./MinorProjectCard";
import { minorProjectsData } from "../data/minorProjectsData";
import "./styles/MinorProjects.css";

const MinorProjects: React.FC = () => {
  return (
    <div className="minor-projects-container section-container">
      <h2 className="project-type-title">
        Minor <span>Projects</span>
      </h2>
      <div className="minor-projects-grid">
        {minorProjectsData.map((project, index) => (
          <MinorProjectCard
            key={index}
            title={project.title}
            video={project.video}
            image={project.image}
            gitLink={project.gitLink}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MinorProjects;
