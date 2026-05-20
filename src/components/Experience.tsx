import React from 'react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section-padding bg-alt relative">
      <div className="section-blob blob-bottom-left"></div>
      
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="label-text">04. Journey</span>
          <h2 className="section-title">
            Work <em className="accent-em">Experience</em>
          </h2>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {experiences.map(exp => (
              <div className="timeline-item" key={exp.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-date">{exp.period}</span>
                    <span className="timeline-role">{exp.role}</span>
                  </div>
                  <h3 className="timeline-company">{exp.company}</h3>
                  <p className="timeline-desc">{exp.description}</p>
                  <ul className="timeline-tags" role="list">
                    {exp.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
