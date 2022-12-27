import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  genderType: Array<string>;
}

const initialState: FilterState = {
  genderType: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeGender: (state, action: PayloadAction<Array<string>>) => {
      state.genderType = action.payload;
    },
  },
});

export const { changeGender } = filterSlice.actions;

export default filterSlice.reducer;
