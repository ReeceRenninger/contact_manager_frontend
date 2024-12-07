import React, { useState } from 'react';
import { createContact, Contact } from '../services/contactService';
import HomeButton from './HomeButton';
import '../App.css';

interface AddContactFormProps {
  onContactAdded: (contact: Contact) => void;
}

const AddContactForm: React.FC<AddContactFormProps> = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Omit<Contact, 'id'> ={ name, email, phone};
    try {
      const addedContact = await createContact(newContact);
      onContactAdded(addedContact);
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <><><HomeButton /></>
    <div className="AddContactForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div></>
  );
};

export default AddContactForm;