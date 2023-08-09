import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations.js';
import { selectContacts } from 'redux/contacts/selectors.js';
import { onSameName } from 'services/utils.js';

const useAddContact = () => {
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

  return {
    handleSubmit,
    handleChange,
    contactNameId,
    name,
    contactPhoneId,
    phone,
  };
};

export default useAddContact;
