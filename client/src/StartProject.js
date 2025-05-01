import React, { useState } from 'react';
import './StartProject.css';

const StartProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName && projectDescription) {
      const newProject = {
        name: projectName,
        description: projectDescription,
        createdAt: new Date().toLocaleString(),
      };
      setProjects([newProject, ...projects]); // add to top
      alert(`🚀 Project "${projectName}" created successfully!`);
      setProjectName('');
      setProjectDescription('');
    }
  };

  return (
    <section className="start-project-section">
      <div className="start-project-container">
        <h2 className="start-project-heading">🚀 Launch Your Open Source Project</h2>
        <form onSubmit={handleSubmit} className="start-project-form">
          <label>
            Project Name:
            <input
              type="text"
              placeholder="Enter your project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </label>
          <label>
            Project Description:
            <textarea
              placeholder="Describe your project idea..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </label>
          <button type="submit">Create Project</button>
        </form>

        {projects.length > 0 && (
          <div className="project-list">
            <h3>🌟 Your Projects</h3>
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <small>Created on: {project.createdAt}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StartProject;
