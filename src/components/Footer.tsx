import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">YJ</span>
              <span className="logo-slash">/&gt;</span>
            </a>
            <p>
              탄탄한 마크업 경험을 토대로<br />
              지속 가능한 가치와 사용자 경험을 고민합니다.
            </p>
          </div>
          
          <div className="footer-links">
            <ul role="list">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/hyj9069" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Han Yeji. All rights reserved.
          </p>
          <a href="#hero" className="back-to-top" onClick={handleScrollToTop} aria-label="상단으로 이동">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
