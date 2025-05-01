import React from "react";

const ProjectList = ({ projects, user, joinProject }) => {
  return (
    <div className="project-list">
      <h3>Explore Projects</h3>
      {projects.length === 0 && <p>No projects created yet.</p>}
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
          <p><strong>Members:</strong> {project.members.join(", ") || "None"}</p>
          {user && !project.members.includes(user.username) && (
            <button onClick={() => joinProject(idx)}>Join</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
