import React, { useState } from 'react';
import '../CSS/Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header inter-regular">
      <div className="title">Will's Portfolio</div>
      <div className="menu-wrapper">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ Menu
        </button>
        {menuOpen && (
          <div className="dropdown">
            <Link to="/" className="link">Home</Link>
            <a href="#projects" className="link">Projects</a>
            <Link to="/Contact" className="link">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

