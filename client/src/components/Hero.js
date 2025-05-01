import React, { useState, useEffect } from "react";

const Hero = ({ setPage }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="clock">{currentTime}</div>
      <div className="container">
        <h2>Collaborate. Create. Contribute.</h2>
        <p>Join beginner-friendly projects, and find teammates!</p>
        <button className="btn" onClick={() => setPage("featureCard")}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
