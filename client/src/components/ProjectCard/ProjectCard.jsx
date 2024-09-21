import React from "react";
import "./ProjectCard.css";
import { projects } from "../../data";
const ProjectCard = () => {
  return (
    <div className="popular_projects_section">
      <h2 className="popular_projects_heading">Popular Projects</h2>
      <div className="projects">
        {projects.map(({ id, img, pp, cat, username, projectName }) => (
          <div key={id} className="project_card">
            <div className="project_image">
              <img src={img} alt="project" />
            </div>
            <div className="project_info">
              <div className="profile_image">
                <img src={pp} alt="profile" />
              </div>
              <div className="profile_details">
                <span className="project_name">{projectName}</span>
                <span className="username">{username}</span>
                <span className="category">{cat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
