import React from 'react';
import './Projects.css'; 
import enrollmentImg from '../Assets/enrollment.png';
import valentineImg from '../Assets/valentine.jpg';
import wizardImg from '../Assets/wizard.webp';
import '../Assets/haha.css';


const projects = [
  {
    title: 'Valentine',
    description: 'A simple, interactive website created to ask someone to be my Valentine. The project highlights my skills in front-end development and design, combining creativity with smooth user interactions for a memorable experience.',
    image: valentineImg, 
    github: 'https://github.com/NoV1al/valentine'
  },
  {
    title: 'Dark Magus',
    description: "A fun and immersive webpage dedicated to the magical world of wizards. This project features interactive elements, character profiles, and magical lore, showcasing my skills in web design and dynamic content creation.",
    image: wizardImg,
    github: 'https://github.com/NoV1al/Assignment-Lorelia'
  },
  {
    title: 'Enrollment Portal',
    description: 'Fast, secure, and easy enrollment system for students to manage their profiles and requirements.',
    image: enrollmentImg,
    github: 'https://github.com/NoV1al/ENROLLMENT-FORM'
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Recent <span>Works</span></h1>
      <p>Here are a few projects I’ve worked on recently.</p>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="card-buttons">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;