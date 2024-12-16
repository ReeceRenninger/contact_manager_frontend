import React, { useEffect, useState } from 'react';
import { getContacts, deleteContact, updateContact, Contact } from '../services/contactService';
import HomeButton from './HomeButton'; // Import the HomeButton component
import UpdateContactModal from './UpdateContactModal'; // Import the UpdateContactModal component
import '../App.css'; // Use the updated App.css

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

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

  const handleDelete = async (id: number) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleUpdate = async (id: number, updatedContact: Omit<Contact, 'id'>) => {
    try {
      await updateContact(id, updatedContact);
      setContacts(contacts.map(contact => (contact.id === id ? { ...contact, ...updatedContact } : contact)));
      console.log('Updated contact with id:', id);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <>
      <HomeButton /> {/* Use the HomeButton component */}
      <div className="ContactList">
        <h1>Contact List</h1>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className="ContactItem">
              {contact.name} - {contact.email} - {contact.phone}
              <button onClick={() => setSelectedContact(contact)} className="UpdateButton">Update</button>
              <button onClick={() => handleDelete(contact.id)} className="DeleteButton">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedContact && (
        <UpdateContactModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default ContactList;