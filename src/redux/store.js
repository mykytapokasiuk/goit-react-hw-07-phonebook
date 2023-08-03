import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { filterSliceReducer } from './slices/filterSlice';
import { contactsSliceReducer } from './slices/contactsSlice';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

export const store = configureStore({
  reducer: {
    contactsFilter: filterSliceReducer,
    contacts: contactsSliceReducer,
    // contacts: persistReducer(contactsPersistConfig, contactsSliceReducer),
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
