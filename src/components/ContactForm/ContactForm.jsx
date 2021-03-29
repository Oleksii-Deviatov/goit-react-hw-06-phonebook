import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

function ContactForm({ contacts, addContact }) {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
  }

  function clrForm() {
    setInputName('');
    setInputNumber('');
  }

  function submitHendler(e) {
    e.preventDefault();

    function checkExistContact() {
      return !!contacts.find(
        ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
      );
    }

    switch (true) {
      case inputName === '':
        return;

      case checkExistContact():
        alert(`${inputName} already exist`);
        return;

      default:
        addContact({ name: inputName, number: inputNumber });
        clrForm();
        break;
    }
  }

  return (
    <form onSubmit={submitHendler} autoComplete="off">
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

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = dispatch => {
  return {
    addContact: data => dispatch(actions.addContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
