import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import bottomRightImage from '../images/bottom-right-image.png';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <Link to="/login" className="navbar-link">Login</Link>
          <span className="navbar-divider">|</span>
          <Link to="/register" className="navbar-link"> Register</Link>
        </nav>
      </header>
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to the Email System</h1>
        
      </div>
      <img src={bottomRightImage} alt="Logo" className="bottom-right-image" />
    </div>
  );
};

export default Home;
