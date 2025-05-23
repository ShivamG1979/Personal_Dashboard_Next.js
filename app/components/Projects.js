import personalData from '../data/personalData';

export default function Projects() {
  const projects = personalData.projects || [];

  return (
    <div className="projects-section">
      <h2 className="section-title">
        <img src="/icons/projects.svg" alt="Projects icon" />
        Featured Projects
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image || "/images/project-placeholder.jpg"}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tech-item">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-demo"
                  >
                    🚀 Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-github"
                  >
                    🐙 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
