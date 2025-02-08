import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar" align="right">
                <ul>
                    <li><a href = '/about'>About us</a></li>
                    <li><a href='/service'>Services</a></li>
                    <li><a href = '/projects'>Projects</a></li>
                    <li><a href = '/member'>Our Team</a></li>
                    <li><a href = '/contact'>Contact us</a></li>
                </ul>
                <h2 align = 'left'> AZHIZEN </h2>
            </nav>
           
            
           
        </div>
    );
};

export default Navbar
