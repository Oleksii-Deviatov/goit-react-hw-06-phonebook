import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
      const inputName = state.inputForm.inputName;
      const inputNumber = state.inputForm.inputNumber;

      if (inputName.length === 0 || inputNumber.length === 0) {
        alert('Empty fields');
        return { ...state };
      } else if (
        state.contacts.find(
          ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
        )
      ) {
        alert('Name allready exist');
        return { ...state };
      }

      return {
        ...state,

        inputForm: {
          inputName: '',
          inputNumber: '',
        },

        contacts: [
          ...state.contacts,
          {
            id: shortid(),
            name: inputName,
            number: inputNumber,
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
      const filtered = state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(state.filter.toLowerCase()),
      );
      return {
        ...state,
        filteredContacts: [...filtered],
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
