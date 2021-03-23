import React from 'react';
import PropTypes from 'prop-types';
import Conact from '../Contact';
import { List } from '@material-ui/core';

function ContactList({ contacts, filterContacts, delContact }) {
  return (
    <List>
      {filterContacts()
        ? filterContacts().map(({ id, name, number }) => {
            return (
              <Conact
                key={id}
                id={id}
                name={name}
                number={number}
                delContact={delContact}
              />
            );
          })
        : contacts.map(({ id, name, number }) => {
            return (
              <Conact
                key={id}
                id={id}
                name={name}
                number={number}
                delContact={delContact}
              />
            );
          })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterContacts: PropTypes.func.isRequired,
  delContact: PropTypes.func.isRequired,
};

export default ContactList;
