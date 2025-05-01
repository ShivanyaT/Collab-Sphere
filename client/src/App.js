import FeedbackForm from './components/FeedbackForm';
import React, { useState, useEffect } from "react";
import "./App.css";
import "./LoginForm.css"
import "./index.css"

const Header = ({ toggleDarkMode, setPage }) => {
  return (
    <header>
      <div className="container">
        <h1>Collab-Sphere</h1>
        <nav>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); setPage("home"); }}>Home</a></li>
            <li><a href="#explore" onClick={(e) => { e.preventDefault(); setPage("explore"); }}>Explore</a></li>
            <li><a href="#startProject" onClick={(e) => { e.preventDefault(); setPage("startProject"); }}>Start Project</a></li>
            <li><a href="#teamChat" onClick={(e) => { e.preventDefault(); setPage("teamChat"); }}>Team Chat</a></li>
            <li><a href="#login" onClick={(e) => { e.preventDefault(); setPage("login"); }}>Login</a></li>
            <li>
              <button onClick={toggleDarkMode} className="dark-mode-toggle">🌙</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
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
        <h3>Join beginner-friendly projects, and find teammates!</h3>
        <a href="#get-started" className="btn">Get Started</a>
      </div>
    </section>
  );
};

// Explore Page
const Explore = () => {
  const handleJoin = (projectName) => {
    alert(`🎉 Congratulations! You have successfully joined ${projectName}.`);
  };

  return (
    <section id="explore" className="explore-page">
      <h2>Explore Projects</h2>
      <div className="projects">
        {["Cosmic Quest", "ExoNav", "StarScope"].map((name, i) => (
          <div className="project-card" key={i}>
            <h3>{name}</h3>
            <p>Project description for {name} goes here.</p>
            <button onClick={() => handleJoin(name)}>Join Team</button>
          </div>
        ))}
      </div>
    </section>
  );
};


// Start Project Page
const StartProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Project Created!");
  };

  return (
    <section id="startProject" className="start-project-page">
      <h2>Start a New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Name" required />
        <textarea placeholder="Project Description" required></textarea>
        <button type="submit">Create Project</button>
      </form>
    </section>
  );
};

// Team Chat Page
const TeamChat = () => (
  <section id="teamChat" className="team-chat-page">
    <h2>Team Chat</h2>
    <div className="chat-container">
      <div className="chat-message">Welcome to the team chat!</div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  </section>
);

// Full Login Page
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <section id="login" className="login-page">
      <h2>Login to OpenSource Connect</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          /> Remember Me
        </label>
        <button
          onClick={() => alert("Redirect to forgot password...")}
          style={{ fontSize: "0.9rem", background: "none", border: "none", color: "blue", cursor: "pointer", textDecoration: "underline" }}
        >
          Forgot Password?
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => alert("Redirect to registration...")} style={{ marginLeft: "10px" }}>Register</button>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "#f9f9f9";
    document.body.style.color = darkMode ? "#ddd" : "#333";
  }, [darkMode]);

  // Check page state and log it for debugging
  useEffect(() => {
    console.log("Current Page: ", page);
  }, [page]);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header toggleDarkMode={setDarkMode} setPage={setPage} />
      
      {page === "home" && <Hero setPage={setPage} />}
      {page === "explore" && <Explore />}
      {page === "startProject" && <StartProject />}
      {page === "teamChat" && <TeamChat />}
      {page === "login" && (
        <div className="login-feedback-wrapper">
          <LoginForm/>
          <FeedbackForm/>
        </div>
      )}
      

      
      <footer>
        <p>© 2025 OpenSource Connect | Empowering Future Developers </p>
      </footer>
    </div>
  );
};

export default App;
