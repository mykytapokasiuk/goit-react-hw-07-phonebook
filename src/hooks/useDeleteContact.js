import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const useDeleteContact = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onRemoveContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return { filteredContacts, onRemoveContact };
};

export default useDeleteContact;
