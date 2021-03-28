import React from 'react';
import Conact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';

function ContactList({ contacts, filteredContacts }) {
  return (
    <List>
      {filteredContacts.length === 0
        ? contacts.map(({ id, name, number }) => {
            return <Conact key={id} id={id} name={name} number={number} />;
          })
        : filteredContacts.map(({ id, name, number }) => {
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

export default connect(mapStateToProps, null)(ContactList);
