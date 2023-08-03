import React, { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/slices/contactsSlice';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const contactNameId = useId();
  const contactNumberId = useId();

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onAddContact = (name, number) => {
    const isExist = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label htmlFor={contactNameId}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          id={contactNameId}
          onChange={handleChange}
          required
        />
        <label htmlFor={contactNumberId}>Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          id={contactNumberId}
          onChange={handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
