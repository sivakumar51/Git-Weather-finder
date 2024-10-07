import React from 'react';
import './Navbar.css';  // Import the CSS file for styling the navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div> <li> <a href="/">GitHub Finder</a> </li> </div>
            <div><li> <a href="/Weather">Weather</a></li></div>
        </nav>
    );
}

export default Navbar;
