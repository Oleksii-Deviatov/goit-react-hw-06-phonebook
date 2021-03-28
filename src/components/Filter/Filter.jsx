import React from 'react';
import { TextField, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Filter({ inputFilter, setInputFilter, filter }) {
  function inputFilterHendler({ target: { value } }) {
    setInputFilter(value);

    filter();
  }

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="find contact by name"
          value={inputFilter}
          onChange={inputFilterHendler}
          margin="dense"
        />
      </Box>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    inputFilter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputFilter: value => dispatch(actions.setInputFilter(value)),
    filter: () => dispatch(actions.filter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
