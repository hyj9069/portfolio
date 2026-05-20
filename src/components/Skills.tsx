import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills section-padding bg-alt relative">
      <div className="section-blob blob-top-right"></div>
      <div className="section-blob blob-bottom-left"></div>
      
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="label-text">02. Skills</span>
          <h2 className="section-title">
            What I <em className="accent-em">Do</em>
          </h2>
        </div>

        <div className="skills-grid">
          {/* Tech Stack Cards */}
          {skills.map((category, idx) => (
            <div className="skill-category" data-aos="fade-up" data-aos-delay={idx * 100} key={category.title}>
              <div className="skill-icon">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-pills">
                {category.pills.map(pill => (
                  <span className={`skill-pill ${pill.tier}`} key={pill.name}>
                    {pill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
