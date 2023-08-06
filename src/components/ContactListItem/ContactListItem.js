import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, contactId, onRemoveContact }) => {
  return (
    <li className={css.listItem}>
      {name}: {phone}
      <button
        className={css.listItemBtn}
        type="button"
        onClick={() => onRemoveContact(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactListItem;
