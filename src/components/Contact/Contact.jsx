import React from 'react';
import {
  Card,
  CardContent,
  IconButton,
  Box,
  CardActionArea,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const useStyles = makeStyles({
  listItem: {
    '&:not(:last-child)': {
      marginBottom: 10,
    },
  },
});

function Conact({ id, name, number, delContact }) {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <p>
                {name}: {number}
              </p>
              <IconButton
                color="primary"
                component="span"
                onClick={() => delContact(id)}
              >
                <DeleteForeverTwoToneIcon />
              </IconButton>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    delContact: value => dispatch(actions.delContact(value)),
  };
};

export default connect(null, mapDispatchToProps)(Conact);
