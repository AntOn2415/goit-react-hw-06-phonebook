import { useEffect, useState } from 'react';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { ContainerDiv, TitleH1, TitleH2 } from './App.styled';


const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts') ?? []));
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const addContact = newContact => {
    const suchNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (suchNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState =>  [newContact, ...prevState],
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
    );
  };
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    return (
      <ContainerDiv>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onAddContact={addContact} />

        <TitleH2>Contacts</TitleH2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={getFilterContact()}
          onDeleteContact={deleteContact}
        />
      </ContainerDiv>
    );
  }

export default App;
