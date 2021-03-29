import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../../redux/contacts/contacts-actions';

const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const contacts = createReducer(init, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.delContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
