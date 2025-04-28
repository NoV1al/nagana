import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo"
      >
        Vince Pogi
      </a>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
