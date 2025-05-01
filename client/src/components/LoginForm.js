import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    alert('Registered Successfully!');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password flow triggered.');
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Login</h2>
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

        <span className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </span>

        <div className="button-row">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
