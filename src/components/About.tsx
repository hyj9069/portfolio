import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* 라벨은 전체 너비 유지 */}
        <div style={{ marginBottom: 'var(--sp-lg)' }} data-aos="fade-up">
          <span className="label-text">01. About Me</span>
        </div>

        <div className="about-grid">
          {/* 왼쪽: 코드 카드만 */}
          <div className="about-visual" data-aos="fade-up" data-aos-delay="100">
            <div className="avatar-wrapper">
              <div className="avatar-core">
                <div className="avatar-code">
                  <pre style={{ whiteSpace: 'pre', overflow: 'hidden' }}><code>
<span className="code-kw">const</span> <span className="code-var">developer</span> = {'{'}{'\n'}
{'  '}<span className="code-key">name</span><span>: </span><span className="code-str">"한예지"</span>,{'\n'}
{'  '}<span className="code-key">role</span><span>: </span><span className="code-str">"Frontend Dev"</span>,{'\n'}
{'  '}<span className="code-key">stack</span><span>: </span><span className="code-str">"React, Next.js"</span>,{'\n'}
{'  '}<span className="code-key">base</span><span>: </span><span className="code-str">"HTML, CSS, JS"</span>,{'\n'}
{'}'};
                  </code></pre>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 제목 + 텍스트 + 버튼 */}
          <div className="about-content" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-title" style={{ marginBottom: 'var(--sp-lg)' }}>
              Problem Solver &amp; <em className="accent-em">Code Artist</em>
            </h2>

            <p className="about-text">
              안녕하세요, 사용자 중심의 인터랙티브 웹을 만드는 프론트엔드 개발자 한예지입니다.
            </p>
            <p className="about-text">
              다년간의 웹 퍼블리싱 경험을 통해 시맨틱 마크업, 웹 접근성, 그리고 크로스 브라우징에 대한 깊은 이해를 갖추고 있습니다.
              최근에는 React와 Next.js 생태계를 깊이 있게 탐구하며, 정적인 페이지를 넘어 동적이고 상태 관리가 효율적인
              현대적 웹 애플리케이션 개발로 영역을 확장하고 있습니다.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fas fa-palette"></i>
                <span>UI/UX 구현 전문</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-bolt"></i>
                <span>성능 최적화 집중</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-universal-access"></i>
                <span>웹 접근성 준수</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-mobile-alt"></i>
                <span>반응형 디자인</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <div className="social-links">
                <a href="https://github.com/hyj9069" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
