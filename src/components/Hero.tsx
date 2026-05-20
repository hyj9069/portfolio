import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  // Typewriter effect
  useEffect(() => {
    const textArray = [
      '탄탄한 마크업과 웹 표준 지식',
      'React & Next.js를 향한 여정',
      '상태 관리에 대한 깊은 탐구',
      '사용자 중심의 UI/UX 구현',
      '성장을 멈추지 않는 개발자'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let timeout: number;

    const type = () => {
      if (!typewriterRef.current) return;
      const currentText = textArray[textIndex];
      if (isDeleting) {
        typewriterRef.current.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typewriterRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typeSpeed = 500;
      }
      timeout = window.setTimeout(type, typeSpeed);
    };
    timeout = window.setTimeout(type, 1000);
    return () => window.clearTimeout(timeout);
  }, []);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.stat-number[data-target]');
    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = String(current);
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            <span className="text-gradient">Creative</span>
            <br />
            <span className="text-outline">Frontend Developer.</span>
          </h1>

          <p className="hero-description">
            탄탄한 마크업과 퍼블리싱 경험을 바탕으로<br /> 프론트엔드 개발자로 도약합니다.
          </p>
          <p className="hero-description" style={{ marginBottom: 'var(--sp-xl)' }}>
            <span className="typewriter" ref={typewriterRef}></span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk <i className="fas fa-paper-plane"></i>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span className="stat-number" data-target="3">0</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-plus">+</span>
              </div>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span className="stat-number" data-target="100">0</span>
                <span className="stat-plus">%</span>
              </div>
              <span className="stat-label">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
