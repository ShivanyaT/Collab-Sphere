import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Why OpenSource Connect?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎯 Easy Projects</h3>
            <p>Handpicked beginner-level projects with full guidance and clear tasks.</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Start Instantly</h3>
            <p>Launch your idea with one click and gather teammates to build it together!</p>
          </div>
          <div className="feature-card">
            <h3>💡 Skill Matching</h3>
            <p>Quickly see required skills before applying. Match your expertise easily.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Built-in Chat</h3>
            <p>Every project includes a private team chat for smooth discussions & updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
