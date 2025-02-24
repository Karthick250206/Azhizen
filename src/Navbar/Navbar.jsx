import React, { useState } from "react";
import './Navbar.css';
import { HiOutlineHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <HiOutlineHome size={40} className="home" />
            <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
                
                <li><a href='/about-us'>About us</a></li>
                <li><a href='/service'>Services</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/members'>Our Team</a></li>
                <li><a href='/contact-us'>Contact us</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
