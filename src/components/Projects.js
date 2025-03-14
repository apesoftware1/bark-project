import React from 'react';
import './Projects.css';
function Projects() {
  return (
    <div className="projects-section">
      <h2>Browse Our Recent-<span>Projects</span></h2>
      <div className="project-container">
        <div className="project">
          <img src="/assets/IMG-20250129-WA0014.jpg" alt="Project One" />
          <h3>Guest House Booking</h3>
          <p>Best booking web application around Hammanskraal Pretoria</p>
          <div className="project-links">
            <button onClick={() => window.open('https://github.com/project1', '_blank')}>GitHub</button>
            <button onClick={() => window.open('https://www.guestlocations.com', '_blank')}>Live Demo</button>
          </div>
        </div>
        <div className="project">
          <img src="/assets/IMG-20250129-WA0014.jpg" alt="Project Two" />
          <h3>Smart Grocery List</h3>
          <p>A task manager to help you organize and prioritize efficiently.</p>
          <div className="project-links">
            <button onClick={() => window.open('https://github.com/project2', '_blank')}>GitHub</button>
            <button onClick={() => window.open('https://project2-demo.com', '_blank')}>Live Demo</button>
          </div>
        </div>
        <div className="project">
          <img src="/assets/IMG-20250129-WA0014.jpg" alt="Project Three" />
          <h3>Project Three</h3>
          <p>Interactive food delivery app offering seamless user experience.</p>
          <div className="project-links">
            <button onClick={() => window.open('https://github.com/project3', '_blank')}>GitHub</button>
            <button onClick={() => window.open('https://project3-demo.com', '_blank')}>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
