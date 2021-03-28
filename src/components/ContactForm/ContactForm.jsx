import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function ContactForm({
  inputName,
  inputNumber,
  setInputName,
  setInputNumber,
  addContact,
}) {
  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
  }

  function submitHendler(e) {
    e.preventDefault();
    addContact();
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

const mapStateToProps = state => {
  return {
    inputName: state.inputForm.inputName,
    inputNumber: state.inputForm.inputNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputName: value => dispatch(actions.setInputName(value)),
    setInputNumber: value => dispatch(actions.setInputNumber(value)),
    addContact: () => dispatch(actions.addContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
