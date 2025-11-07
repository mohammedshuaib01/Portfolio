import React, { useState } from 'react';
import './Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div className='logo' > <a href="#home">SHUAIB.</a></div>

      <div
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href='#home'>Home</a></li>

          <li><a href='#about'>About</a></li>

          <li><a href='#skills'>Skills</a></li>
          
          <li><a href='#works'>Works</a></li>
          
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>

      <div className='btn-div'>
        <a href='#contact' className='header-btn'>
          <span>Hire Me</span>  
        </a>
      </div>


    </header>
  );
}

export default Header;
