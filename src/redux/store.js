import { configureStore } from '@reduxjs/toolkit';
import { filterSliceReducer } from './slices/filterSlice';
import { contactsSliceReducer } from './slices/contactsSlice';

export const store = configureStore({
  reducer: {
    contactsFilter: filterSliceReducer,
    contacts: contactsSliceReducer,
  },
});
