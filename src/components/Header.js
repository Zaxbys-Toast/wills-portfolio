import React, { useState } from 'react';
import '../CSS/Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="title">Will's Portfolio</div>
      <div className="menu-wrapper">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ Menu
        </button>
        {menuOpen && (
          <div className="dropdown">
            <Link to="/" className="link">Home</Link>
            <Link to="/Projects" className="link">Projects</Link>
            <Link to="/About" className="link">About</Link>
          </div>
        )}
      </div>
    </header>
  );
}

