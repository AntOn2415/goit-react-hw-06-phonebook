import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { ContainerDiv, TitleH1, TitleH2 } from './App.styled';


const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value));
    };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  function handleDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <ContainerDiv>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />

      <TitleH2>Contacts</TitleH2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getFilteredContact()}
        onDeleteContact={handleDeleteContact}
      />
    </ContainerDiv>
  );
}

export default App;
