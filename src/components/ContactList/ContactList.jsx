import React, { useEffect } from 'react';
import Conact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function ContactList({ contacts, filteredContacts, filter }) {
  useEffect(() => {
    filter();
  }, [contacts]);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <Conact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filteredContacts: state.filteredContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filter: () => dispatch(actions.filter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
