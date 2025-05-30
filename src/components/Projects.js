import './Projects.css';

const projects = [
  {
    title: "Incident Management System",
    description: "Web app for reporting and tracking incidents with real-time escalation and risk analysis.",
    tech: "Angular, Spring Boot, MySQL",
    github: "https://github.com/yourname/project1",
    demo: "#"
  },
  {
    title: "Employee Leave Tracker",
    description: "System to manage employee leave requests, balances, and approvals with automated email notifications.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/yourname/project2",
    demo: "#"
  },
  {
    title: "Inventory Dashboard",
    description: "Interactive dashboard for stock level monitoring, sales analytics, and reorder alerts.",
    tech: "Vue.js, Firebase",
    github: "https://github.com/yourname/project3",
    demo: "#"
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h3>{p.title}</h3>
            <p className="description">{p.description}</p>
            <p className="tech">{p.tech}</p>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
