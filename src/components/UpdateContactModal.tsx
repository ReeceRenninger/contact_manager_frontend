import React, { useState } from 'react';
import { Contact } from '../services/contactService'; // Import the Contact type
import '../App.css'; // Use the updated App.css

interface UpdateContactModalProps {
  contact: Contact;
  onClose: () => void;
  onUpdate: (id: number, updatedContact: Omit<Contact, 'id'>) => void;
}

const UpdateContactModal: React.FC<UpdateContactModalProps> = ({ contact, onClose, onUpdate }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContact = { name, email, phone };
    onUpdate(contact.id, updatedContact);
    onClose();
  };

  return (
    <div className="Modal">
      <div className="Modal-content">
        <span className="Close" onClick={onClose}>&times;</span>
        <h2>Update Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update Contact</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContactModal;