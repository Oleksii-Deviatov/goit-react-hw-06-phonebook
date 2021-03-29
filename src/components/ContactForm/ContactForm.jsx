import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function inputNameHandler({ target: { value } }) {
    setName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setNumber(value);
  }

  function submitHendler(e) {
    e.preventDefault();
    addContact({ name, number });
  }

  return (
    <form onSubmit={submitHendler} autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          onChange={inputNameHandler}
          margin="dense"
        />
        <TextField
          id="standard-basic"
          label="Number"
          value={number}
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

const mapDispatchToProps = dispatch => {
  return {
    addContact: data => dispatch(actions.addContact(data)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
