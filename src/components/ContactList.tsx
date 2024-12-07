import React, { useEffect, useState } from 'react';
import { getContacts, Contact } from '../services/contactService';
import HomeButton from './HomeButton';
import '../App.css';

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
      <><HomeButton /><>
      <div className="ContactList">
        <h1>Contact List</h1>
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className="ContactItem">
                {contact.name} - {contact.email} - {contact.phone}
              </li>
            );
          })}
        </ul>
      </div>

    </></>
  );
};

export default ContactList;