import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filterSlice = createSlice({
  name: 'contactsFilter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
