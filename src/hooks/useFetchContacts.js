import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/operations.js';
import {
  selectContacts,
  selectError,
  selectIsloading,
} from 'redux/contacts/selectors.js';

const useFetchContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return { contacts, isLoading, error };
};

export default useFetchContacts;
