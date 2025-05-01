import React from 'react';

const Header = ({ toggleDarkMode }) => {
  return (
    <header>
      <div className="container">
        <h1>OpenSource Connect</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Start Project</a></li>
            <li><a href="#">Team Chat</a></li>
            <li><a href="#">Login</a></li>
            <li>
              <button 
                onClick={toggleDarkMode} 
                className="dark-mode-toggle" 
                aria-label="Toggle dark mode"
              >
                🌙
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
