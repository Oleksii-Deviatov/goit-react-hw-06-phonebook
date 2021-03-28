export const addContact = () => ({
  type: 'contacts/addContact',
});

export const delContact = value => ({
  type: 'contacts/delContact',
  payload: value,
});

export const setInputName = value => ({
  type: 'inputForm/setInputName',
  payload: value,
});

export const setInputNumber = value => ({
  type: 'inputForm/setInputNumber',
  payload: value,
});

export const setInputFilter = value => ({
  type: 'filter/setInputFilter',
  payload: value,
});

export const filter = () => ({
  type: 'filteredContacts/filter',
});
