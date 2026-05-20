import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type FilterType = 'All' | 'web' | 'side';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'All' },
    { label: 'Web', value: 'web' },
    { label: 'Toy', value: 'side' }
  ];

  // 필터 변경 시 애니메이션 동기화 및 ScrollTrigger 리프레시
  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9;
        if (isVisible) {
          card.classList.add('aos-animate');
        }
      });
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section id="projects" className="projects section-padding relative">
      <div className="section-blob blob-top-left"></div>
      <div className="section-blob blob-bottom-right"></div>
      
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <div className="projects-title-area">
            <span className="label-text">03. Selected Works</span>
            <h2 className="section-title">
              Featured <em className="accent-em">Projects</em>
            </h2>
          </div>
          
          <div className="project-filters" role="tablist" aria-label="프로젝트 카테고리 필터">
            {filterButtons.map(btn => (
              <button 
                key={btn.value}
                className={`filter-btn ${activeFilter === btn.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(btn.value)}
                role="tab"
                aria-selected={activeFilter === btn.value}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <a 
              key={project.id}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              data-category={project.category.join(' ')} 
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="project-image">
                <div className="project-thumb" style={{ '--data-color': project.color } as React.CSSProperties}>
                  <div className="project-thumb-inner">
                    <span className="project-icon"><i className={`fas ${project.icon}`}></i></span>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-num">0{idx + 1}</span>
                  {project.category.includes('web') && <span className="project-badge">Web</span>}
                  {project.category.includes('side') && <span className="project-badge badge-open">Toy</span>}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tags" role="list">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
