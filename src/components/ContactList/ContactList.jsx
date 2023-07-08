import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { ContactUl } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getFilteredContact();

  return (
    <ContactUl>
      {filteredContact.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactUl>
  );
};

export default ContactList;
