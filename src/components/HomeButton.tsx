import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Use the updated App.css

const HomeButton: React.FC = () => {
  return (
    <div className="HomeButton">
        <Link to="/" className='HomeButton-link'>Home</Link>
    </div>
  );
};

export default HomeButton;