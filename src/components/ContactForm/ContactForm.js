import React, { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { onSameName } from 'services/utils.js';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const contactNameId = useId();
  const contactPhoneId = useId();

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, phone);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onAddContact = (name, phone) => {
    const isExist = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      onSameName(name);
      return;
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContactThunk(newContact));
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
        <label htmlFor={contactPhoneId}>Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter your phone"
          value={phone}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          id={contactPhoneId}
          onChange={handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
