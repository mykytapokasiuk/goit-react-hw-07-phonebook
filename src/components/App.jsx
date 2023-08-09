import React, { useEffect } from 'react';
import useFetchContacts from 'hooks/useFetchContacts.js';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import ContactList from './ContactList/ContactList.js';
import Loader from './Loader/Loader.js';
import * as notifications from 'services/utils.js';
import css from './App.module.css';

const App = () => {
  const { contacts, isLoading, error } = useFetchContacts();

  useEffect(() => {
    if (!error) return;
    notifications.onError(error);
  }, [error]);

  return (
    <div className={css.app}>
      <div className={css.container}>
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
