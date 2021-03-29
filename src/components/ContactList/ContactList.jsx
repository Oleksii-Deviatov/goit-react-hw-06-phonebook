import Conact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';

function ContactList({ contacts }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <Conact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

export default connect(mapStateToProps)(ContactList);
