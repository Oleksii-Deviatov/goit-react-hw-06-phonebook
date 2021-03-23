import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Container, Typography } from '@material-ui/core';

function App() {
  const [contacts, setContacts] = useState([]);

  const [find, setFind] = useState('');

  function filterContacts() {
    if (!find) {
      return;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(find.toLowerCase()),
    );
  }

  function delContact(id) {
    setContacts(contacts.filter(el => el.id !== id));
  }

  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h2" align="center">
          Phonebook
        </Typography>

        <ContactForm setContacts={setContacts} contacts={contacts} />

        <Typography variant="h4" align="center">
          Contacts
        </Typography>

        <Filter setFind={setFind} find={find} />

        <ContactList
          contacts={contacts}
          filterContacts={filterContacts}
          delContact={delContact}
        />
      </Container>
    </>
  );
}

export default App;
