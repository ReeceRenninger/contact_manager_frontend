import React, { useEffect, useState } from 'react';
import { getContacts, Contact } from '../services/contactService';
import AddContactForm from './addContactForm';

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        console.log('Fetched contacts:', data); // Add logging
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error); // Add error logging
      }
    };

    fetchContacts();
  }, []);

  const handleContactAdded = (newContact: Contact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => {
          console.log('Rendering contact with Id:', contact.id); // Add logging
          return (
            <li key={contact.id}>
              {contact.name} - {contact.email} - {contact.phone}
            </li>
          );
        })}
      </ul>
      {<AddContactForm onContactAdded={handleContactAdded} />}
    </div>
  );
};

export default ContactList;