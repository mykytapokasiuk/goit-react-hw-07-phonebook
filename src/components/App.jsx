import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/selectors.js';
import { fetchContactsThunk } from 'redux/operations.js';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import ContactList from './ContactList/ContactList.js';
import Loader from './Loader/Loader.js';
import { onError } from 'services/utils.js';
import css from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <div className={css.container}>
        {error !== null && onError(error)}
        {isLoading && <Loader />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length === 0 ? (
          <p className={css.contactsEmptyText}>The contact list is empty</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default App;
