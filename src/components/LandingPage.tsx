// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Contact Manager</h1>
      <nav>
        <ul>
          <li><Link to="/contacts">Contact List</Link></li>
          <li><Link to="/add-contact">Create Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;