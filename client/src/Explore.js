// Explore.js
import React from 'react';

const Explore = () => {
  const projects = [
    { id: 1, name: 'Project A', description: 'A description for project A' },
    { id: 2, name: 'Project B', description: 'A description for project B' },
    // You can add more mock projects or fetch them from an API later
  ];

  const handleJoinTeam = (projectName) => {
    alert(`You have joined the ${projectName} team!`);
    // You would send a request to join a project to the backend here
  };

  return (
    <section>
      <div className="container">
        <h2>Explore Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button onClick={() => handleJoinTeam(project.name)}>Join Team</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
