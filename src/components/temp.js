import React, { useState } from 'react';
import '../CSS/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" >
      <div className="inter-regular">
        <div className="title">Will's Portfolio</div>

        <div className="menu-wrapper">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ Menu
          </button>

          {menuOpen && (
            <div className="dropdown">
              <a href="#home" className="link">Home</a>
              <a href="#projects" className="link">Projects</a>
              <a href="#contact" className="link">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

