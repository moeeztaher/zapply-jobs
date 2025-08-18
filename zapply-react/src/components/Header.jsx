import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <img src="/logo.svg" alt="Zapply Logo" className="logo" />
      <nav>
        <a href="#community" onClick={(e) => { e.preventDefault(); scrollToSection('community'); }}>
          Community
        </a>
        <a href="#career-tips" onClick={(e) => { e.preventDefault(); scrollToSection('career-tips'); }}>
          Career Tips
        </a>
      </nav>
      <button className="install-btn">Join Waitlist</button>
    </header>
  );
};

export default Header;