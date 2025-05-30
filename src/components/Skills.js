import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const skillList = [
    {
      icon: faHtml5,
      title: 'HTML5',
      desc: 'Semantic, accessible markup'
    },
    {
      icon: faCss3Alt,
      title: 'CSS3',
      desc: 'Responsive layouts & animations'
    },
    {
      icon: faJsSquare,
      title: 'JavaScript',
      desc: 'ES6+, DOM & APIs'
    },
    {
      icon: faReact,
      title: 'React',
      desc: 'Component-driven UI'
    },
    {
      icon: faNodeJs,
      title: 'Node.js',
      desc: 'Server-side & REST APIs'
    },
    {
      icon: faGitAlt,
      title: 'Git',
      desc: 'Version control & collaboration'
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
