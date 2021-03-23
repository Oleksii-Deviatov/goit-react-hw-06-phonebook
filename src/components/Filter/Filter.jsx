import React from 'react';
import { TextField, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

function Filter({ setFind, find }) {
  function inputFindHendler({ target: { value } }) {
    setFind(value);
  }

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          id="standard-basic"
          label="find contact by name"
          value={find}
          onChange={inputFindHendler}
          margin="dense"
        />
      </Box>
    </form>
  );
}

Filter.propTypes = {
  setFind: PropTypes.func.isRequired,
  find: PropTypes.string.isRequired,
};

export default Filter;
