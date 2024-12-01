import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Use HTTP if HTTPS is not configured

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Validating Contact data is correct or not
const isContact = (data: any): data is Contact => {
  return (
    typeof data.id === 'number' &&
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.phone === 'string'
  );
};

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axios.get(`${API_URL}/contacts`);
  const data = response.data;
  console.log('Response data:', data); // Log the response data
  if (Array.isArray(data) && data.every(isContact)) {
    return data;
  } else {
    throw new Error('Invalid data format');
  }
};

export const getContactById = async (Id: number): Promise<Contact> => {
  const response = await axios.get(`${API_URL}/contacts/${Id}`);
  const data = response.data;
  if (isContact(data)) {
    return data;
  } else {
    throw new Error('Invalid data format');
  }
};

export const createContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
  const response = await axios.post(`${API_URL}/contacts`, contact);
  const data = response.data;
  if (isContact(data)) {
    return data;
  } else {
    throw new Error('Invalid data format');
  }
};

export const updateContact = async (Id: number, contact: Omit<Contact, 'id'>): Promise<Contact> => {
  const response = await axios.put(`${API_URL}/contacts/${Id}`, contact);
  const data = response.data;
  if (isContact(data)) {
    return data;
  } else {
    throw new Error('Invalid data format');
  }
};

export const deleteContact = async (Id: number): Promise<void> => {
  await axios.delete(`${API_URL}/contacts/${Id}`);
};