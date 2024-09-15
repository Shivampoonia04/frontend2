import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner" aria-label="Header">
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* Add more links here as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
