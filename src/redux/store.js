import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'dffs sdfsdf', number: '459-12-56' },
    { id: 'id-3', name: 'dsfdf sdfsd', number: '459-12-56' },
  ],

  inputForm: {
    inputName: '',
    inputNumber: '',
  },

  filter: '',

  filteredContacts: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: shortid(),
            name: state.inputForm.inputName,
            number: state.inputForm.inputNumber,
          },
        ],
      };

    case 'contacts/delContact':
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };

    case 'inputForm/setInputName':
      return {
        ...state,
        inputForm: {
          ...state.inputForm,
          ...{ inputName: payload },
        },
      };

    case 'inputForm/setInputNumber':
      return {
        ...state,
        inputForm: {
          ...state.inputForm,
          ...{ inputNumber: payload },
        },
      };

    case 'filter/setInputFilter':
      return {
        ...state,
        filter: payload,
      };

    case 'filteredContacts/filter':
      return {
        ...state,
        filteredContacts: state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(state.filter.toLowerCase()),
        ),
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
