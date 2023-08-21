import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState/phonebookInitialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  reducers: {
    addContact: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = action.payload
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, changeFilter, deleteContact } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
