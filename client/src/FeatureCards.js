// src/FeatureCards.js
import React from "react";
import './FeatureCards.css';  // Optional styling for the feature cards

const FeatureCards = () => {
  return (
    <section id="feature-cards" className="feature-cards">
      <div className="container">
        <h2>Explore Our Features</h2>
        <div className="feature-cards-wrapper">
          
          {/* Feature Card: Skill Filtering */}
          <div className="feature-card">
            <h3>Skill-Based Filtering</h3>
            <p>
              Filter projects based on your current skill set. Whether you're a beginner or an expert, find projects that match your capabilities and interests.
            </p>
            <button className="btn">Filter Projects</button>
          </div>

          {/* Feature Card: Collaboration */}
          <div className="feature-card">
            <h3>Collaborate</h3>
            <p>
              Work with teammates on exciting open-source projects. Share ideas, solve problems together, and grow as a team!
            </p>
            <button className="btn">Start Collaborating</button>
          </div>

          {/* Feature Card: Create and Contribute */}
          <div className="feature-card">
            <h3>Create</h3>
            <p>
              Contribute to real-world projects and enhance your portfolio. Gain hands-on experience that can boost your career.
            </p>
            <button className="btn">Create a Project</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
