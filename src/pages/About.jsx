import React from 'react';
import './About.css';
import profilePic from '../Assets/about.jpg';
import '../Assets/haha.css';


function About() {
  return (
    <div className="about-page">
      <h1>Ako si Notoy</h1>

      <div className="about-content">
        <img src={profilePic} alt="Vince Allen Quinto" className="profile-pic" />
        
        <div className="about-text">
          <p>Hello Everyone, I am <strong>Vince Allen Quinto</strong> from Lucena City.</p>
          <p>I am currently a student at <strong>Dalubhasaan ng Lungsod ng Lucena</strong>.</p>
          <p>I have graduated Senior High at <strong>Lucena City National Highschool</strong>.</p>
        </div>
      </div>

      <div className="hobbies">
        <h2>Other things I'd rather do:</h2>
        <ul>
          <li>Watching Anime</li>
          <li>Lying in my Bed!</li>
          <li>Cuddling with HER!</li>
        </ul>
      </div>

      <div className="quote">
        <p>"Know yourself and know your enemy, and in a hundred battles you will never peril."</p>
        <span>- Sun Tzu</span>
      </div>

      <div className="skills-section">
        <h2>Professional Skillset</h2>
        <div className="skills-grid">
          {[
            'HTML', 'Quirk', 'CSS', 'JavaScript', 'Magic', 
            'React', 'Node.js', 'Bankai', 'Python', 'Haki', 
            'Java', 'MongoDB', 'Nen', 'StarPlatinum','Alchemy','Cursed Techniques'
          ].map((skill, index) => (
            <div key={index} className="skill-card">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;