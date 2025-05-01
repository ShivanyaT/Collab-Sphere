// src/components/ParentComponent.js

import React from "react";
import TeamChat from "./TeamChat"; // Import the TeamChat component

const ParentComponent = () => {
  // Sample data for project, user, and members
  const project = {
    title: "Team Project A",
    description: "This is a sample team project"
  };

  const user = {
    username: "john_doe",
    gender: "Male"
  };

  const members = [
    { username: "john_doe", gender: "Male" },
    { username: "jane_doe", gender: "Female" },
    { username: "alex_smith", gender: "Male" },
    { username: "sara_lee", gender: "Female" }
  ];

  return (
    <div>
      <h2>Welcome to the Team Chat</h2>
      
      {/* Passing props to TeamChat */}
      <TeamChat project={project} user={user} members={members} />
    </div>
  );
};

export default ParentComponent;
