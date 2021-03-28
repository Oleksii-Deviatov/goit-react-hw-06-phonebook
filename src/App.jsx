import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h2" align="center">
          Phonebook
        </Typography>

        <ContactForm />

        <Typography variant="h4" align="center">
          Contacts
        </Typography>

        <Filter />

        <ContactList />
      </Container>
    </>
  );
}

export default App;
