import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section-padding relative">
      <div className="section-blob blob-bottom-right"></div>
      
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="label-text">05. Get In Touch</span>
          <h2 className="section-title">
            Let's Build<br /><em className="accent-em">Together</em>
          </h2>
          <p className="contact-text">
            새로운 기회와 흥미로운 프로젝트 제안을 언제나 환영합니다.<br />
            함께 성장할 수 있는 기회가 있다면 편하게 연락주세요!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-channels" data-aos="fade-up" data-aos-delay="100">
            <a href="mailto:hyj99811@gmail.com" className="contact-channel">
              <div className="channel-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">Email</span>
                <span className="channel-value">hyj99811@gmail.com</span>
              </div>
              <i className="fas fa-arrow-right channel-arrow"></i>
            </a>
            
            <a href="https://github.com/hyj9069" target="_blank" rel="noopener noreferrer" className="contact-channel">
              <div className="channel-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="channel-info">
                <span className="channel-label">GitHub</span>
                <span className="channel-value">github.com/hyj9069</span>
              </div>
              <i className="fas fa-arrow-right channel-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
