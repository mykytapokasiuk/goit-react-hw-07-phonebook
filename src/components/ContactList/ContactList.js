import React from 'react';
import useDeleteContact from 'hooks/useDeleteContact.js';
import ContactListItem from '../ContactListItem/ContactListItem.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const { filteredContacts, onRemoveContact } = useDeleteContact();

  return filteredContacts.length === 0 ? (
    <p className={css.contactsEmptyText}>No contact</p>
  ) : (
    <div className={css.container}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactListItem
            key={id}
            name={name}
            phone={phone}
            contactId={id}
            onRemoveContact={onRemoveContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
