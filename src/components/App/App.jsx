import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import { ContainerDiv, TitleH1, TitleH2 } from './App.styled';

const App = () => {
  return (
    <ContainerDiv>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </ContainerDiv>
  );
};

export default App;
