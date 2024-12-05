import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import { Contact } from './services/contactService';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleContactAdded = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route
          path="/add-contact"
          element={<AddContactForm onContactAdded={handleContactAdded} />}
        />
      </Routes>
    </Router>
  );
};

export default App;