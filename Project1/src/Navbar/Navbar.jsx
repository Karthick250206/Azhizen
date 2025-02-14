import React from 'react';
import { FaHome } from 'react-icons/fa'; // Importing home icon
import logo from '../assets/logo.jpg'; // Ensure the correct path
import './Navbar.css'; // Import the CSS file for styling

function Navbar({ setPage }) {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#" onClick={() => setPage("about")}>About us</a></li>
          <li><a href="#" onClick={() => setPage("services")}>Services</a></li>
          <li><a href="#" onClick={() => setPage("projects")}>Projects</a></li>
          <li><a href="#" onClick={() => setPage("team")}>Our Team</a></li>
          <li><a href="#" onClick={() => setPage("contact")}>Contact us</a></li>
          <li>
            <a href="#" onClick={() => setPage("home")} className="home-icon">
              <FaHome size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;