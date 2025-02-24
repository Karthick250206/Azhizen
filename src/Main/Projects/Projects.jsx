import React from "react";
import "./Projects.css"; // Importing the CSS file

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        "Discover our work and the impact we create through innovative solutions.
        Each project reflects our commitment to excellence and creativity."
      </p>

      <div className="projects-cards">
        <div className="project-card">
            <div className="top">
            <div className="icon">📈</div>
            <h3>Completed Projects</h3>
            </div>
          
          <div className="count">2+</div>
        </div>
        <div className="project-card">
            <div className="top">
            <div className="icon">🔄</div>
            <h3>Ongoing Projects</h3>
            </div>
         
          <div className="count">3+</div>
        </div>
      </div>

      <button className="explore-button">Explore our Projects</button>
    </section>
  );
};

export default Projects;
