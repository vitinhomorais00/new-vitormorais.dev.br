import { useState } from 'react'
import './styles/header.css';
import logo from './assets/logo.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vitormorais.Dev Logo" />
      </div>
      <nav className={`nav ${isMobile ? 'mobile-nav' : ''}`}>
        <ul className={`nav-links ${isMobile ? 'nav-links-mobile' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="mobile-menu-icon" onClick={handleToggle}>
          {isMobile ? 'b' : 'a'}
        </button>
      </nav>
    </header>
  );
};

export default Header;