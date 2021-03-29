import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', value => ({
  payload: {
    id: shortid(),
    ...value,
  },
}));

const delContact = createAction('contacts/del');

const changeFilter = createAction('contacts/changeFilter');

export { addContact, delContact, changeFilter };
