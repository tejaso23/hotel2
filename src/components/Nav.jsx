// components/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Parvati Woods Cottage 97</h2>
      </div>
      <div className={`navbar-right ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
          <li><Link to="/book-room" onClick={toggleMenu}>Book a Room</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Nav;
