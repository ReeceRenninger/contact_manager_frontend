// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactList from './components/ContactList'; // Assuming you have this component
// import AddContactForm from './components/AddContactForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacts" element={<ContactList />} />
        {/* <Route path="/add-contact" element={<AddContactForm />} /> */}
      </Routes>
    </Router>
  );
};

export default App;