import { configureStore } from '@reduxjs/toolkit';
import { filterSliceReducer } from './filter/filterSlice.js';
import { contactsSliceReducer } from './contacts/contactsSlice.js';

export const store = configureStore({
  reducer: {
    contactsFilter: filterSliceReducer,
    contacts: contactsSliceReducer,
  },
});
