// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      <h1>Welcome to the Contact Manager</h1>
      <nav>
        <ul className="LandingPage-nav">
          <li><Link to="/contacts" className="LandingPage-link">Contact List</Link></li>
          <li><Link to="/add-contact" className="LandingPage-link">Create Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;