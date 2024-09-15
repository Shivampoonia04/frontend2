import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Fruit.ai</h1>
      <div className="services">
        <Link to="/chatbot" className="service-link">Chatbot</Link>
        <Link to="/translator" className="service-link">Translator</Link>
        <Link to="/faq" className="service-link">FAQ</Link>
        <Link to="/about" className="service-link">About</Link>
      </div>
    </div>
  );
};

export default HomePage;
