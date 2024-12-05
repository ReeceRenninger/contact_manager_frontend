import React, { useEffect, useState } from 'react';
import { getContacts, Contact } from '../services/contactService';


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
    </div>
  );
};

export default ContactList;