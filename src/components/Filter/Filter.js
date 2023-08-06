import React from 'react';
import useFilterContacts from 'hooks/useFilterContacts';
import css from './Filter.module.css';

const Filter = () => {
  const { filter, filterNameId, onChangeFilter } = useFilterContacts();

  return (
    <div className={css.container}>
      <div className={css.filter}>
        <label htmlFor={filterNameId}>Find contacts by name</label>
        <input
          type="text"
          value={filter}
          name="name"
          placeholder="Enter name"
          id={filterNameId}
          onChange={onChangeFilter}
          required
        />
      </div>
    </div>
  );
};

export default Filter;
