// StartProject.js
import React, { useState } from 'react';

const StartProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName && projectDescription) {
      alert(`Project "${projectName}" created successfully!`);
      // You would typically send the project data to the backend here
      setProjectName('');
      setProjectDescription('');
    }
  };

  return (
    <section>
      <div className="container">
        <h2>Create a New Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <button type="submit">Create Project</button>
        </form>
      </div>
    </section>
  );
};

export default StartProject;
