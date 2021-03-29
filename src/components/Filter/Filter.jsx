import React from 'react';
import { TextField, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

function Filter({ changeFilter, filter }) {
  function inputFilterHendler({ target: { value } }) {
    changeFilter(value);
  }

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="find contact by name"
          value={filter}
          onChange={inputFilterHendler}
          margin="dense"
        />
      </Box>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: value => dispatch(actions.changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
