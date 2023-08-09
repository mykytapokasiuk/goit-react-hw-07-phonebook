import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice.js';
import { selectFilter } from 'redux/filter/selectors.js';

const useFilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterNameId = useId();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return { filter, filterNameId, onChangeFilter };
};

export default useFilterContacts;
