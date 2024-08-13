import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1 className="title">Your Name</h1>
      <h2 className="subtitle">Contact Information</h2>
      <nav>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;