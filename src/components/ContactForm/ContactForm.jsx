import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { TextField, Button, Box } from '@material-ui/core';

function ContactForm({ setContacts, contacts }) {
  const [inputName, setInputName] = useState('');

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  const [inputNumber, setInputNumber] = useState('');

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (inputName === '') {
      return;
    }
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
      )
    ) {
      alert(`${inputName} already exist`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      {
        id: shortid(),
        name: inputName,
        number: inputNumber,
      },
    ]);
    setInputName('');
    setInputNumber('');
  }

  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="Name"
          value={inputName}
          onChange={inputNameHandler}
          margin="dense"
        />
        <TextField
          id="standard-basic"
          label="Number"
          value={inputNumber}
          onChange={inputNumberHendler}
          margin="dense"
        />
        <Button variant="outlined" type="submit" color="primary">
          add contact
        </Button>
      </Box>
    </form>
  );
}

ContactForm.propTypes = {
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactForm;
