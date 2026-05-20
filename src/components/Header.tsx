import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="홈으로 이동">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">YJ</span>
          <span className="logo-slash">/&gt;</span>
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="테마 전환"
          >
            <span className="toggle-track"></span>
            <span className="toggle-thumb"></span>
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
          
          <a href="#contact" className="btn btn-outline-sm" onClick={(e) => handleNavClick(e, '#contact')}>Hire Me</a>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul role="list">
          <li><a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#skills" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
          <li><a href="#projects" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#experience" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
