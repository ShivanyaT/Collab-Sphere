import React, { useState } from "react";

const CreateProject = ({ addProject }) => {
  const [project, setProject] = useState({ title: "", description: "", skills: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...project,
      skills: project.skills.split(",").map(s => s.trim()),
      members: [],
    };
    addProject(newProject);
    setProject({ title: "", description: "", skills: "" });
  };

  return (
    <div className="create-project">
      <h3>Create a Project</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        />
        <input
          placeholder="Skills (comma separated)"
          value={project.skills}
          onChange={(e) => setProject({ ...project, skills: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProject;
