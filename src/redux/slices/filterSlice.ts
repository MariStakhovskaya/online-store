import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  genderType: Array<string>;
  searchValue: string;
  sort: string;
}

const initialState: FilterState = {
  genderType: [],
  searchValue: ' ',
  sort: 'price_desc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeGender: (state, action: PayloadAction<Array<string>>) => {
      state.genderType = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    sort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { changeGender, setSearchValue, sort } = filterSlice.actions;

export default filterSlice.reducer;
