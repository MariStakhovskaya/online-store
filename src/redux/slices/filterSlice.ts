import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GenderTypeObj {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface CategoryTypeObj {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface FilterState {
  genderType: Array<GenderTypeObj>;
  categoryType: Array<CategoryTypeObj>;
  searchValue: string;
  sort: string;
}

const initialState: FilterState = {
  genderType: [
    { id: 1, name: 'девочка', isChecked: false },
    { id: 2, name: 'мальчик', isChecked: false },
  ],
  categoryType: [
    { id: 1, name: 'senior', isChecked: false },
    { id: 2, name: 'middle', isChecked: false },
    { id: 3, name: 'junior', isChecked: false },
    { id: 4, name: 'student1', isChecked: false },
    { id: 5, name: 'trainee', isChecked: false },
    { id: 6, name: 'mentor', isChecked: false },
  ],
  searchValue: '',
  sort: 'price_desc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeGender: (state, action: PayloadAction<Array<GenderTypeObj>>) => {
      state.genderType = [...action.payload];
    },
    changeCategoryType: (
      state,
      action: PayloadAction<Array<GenderTypeObj>>
    ) => {
      state.categoryType = [...action.payload];
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    sort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setFilters: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      state.searchValue = action.payload;
    },
  },
});

export const {
  changeGender,
  setSearchValue,
  sort,
  changeCategoryType,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
