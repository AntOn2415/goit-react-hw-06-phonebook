import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        const suchNameExists = state.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (suchNameExists) {
          alert(`${name} is already in contacts.`);
          return;
        }
        state.push({ id, name, number });
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
