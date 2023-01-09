import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../App';

export interface DucksState {
  ducks: Array<ProductType>;
  totalPrice: number;
  limit: number;
  currentPage: number;
}

const initialState: DucksState = {
  ducks: localStorage.getItem('ducks')
    ? JSON.parse(localStorage.getItem('ducks') as string)
    : [],
  totalPrice: localStorage.getItem('ducks')
    ? JSON.parse(localStorage.getItem('ducks') as string).reduce(
        (sum: number, duck: ProductType) => {
          return sum + duck.price * duck.count;
        },
        0
      )
    : 0,
  limit: localStorage.getItem('limit')
    ? JSON.parse(localStorage.getItem('limit') as string)
    : 3,
  currentPage: localStorage.getItem('currentPage')
    ? JSON.parse(localStorage.getItem('currentPage') as string)
    : 1,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addDuck(state, action: PayloadAction<ProductType>) {
      let num = 0;
      if (state.ducks.find((duck) => duck.id === action.payload.id)) {
        state.ducks.forEach((duck, i) => {
          if (duck.id === action.payload.id) num = i;
        });
        if (state.ducks[num].count < state.ducks[num].stock)
          state.ducks[num].count = state.ducks[num].count + 1;
      } else {
        state.ducks.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.ducks.reduce((sum, duck) => {
        return duck.price * duck.count + sum;
      }, 0);
      localStorage.setItem('ducks', JSON.stringify(state.ducks));
    },
    removeDuck(state, action: PayloadAction<ProductType>) {
      let num = 0;
      state.ducks.forEach((duck, i) => {
        if (duck.id === action.payload.id) num = i;
      });
      if (action.payload.count > 1)
        state.ducks[num].count = state.ducks[num].count - 1;
      else state.ducks.splice(num, 1);
      state.totalPrice = state.ducks.reduce((sum, duck) => {
        return duck.price * duck.count + sum;
      }, 0);
      localStorage.setItem('ducks', JSON.stringify(state.ducks));
    },
    setQuery(state, action) {
      state.limit = Number(action.payload.limit);
      state.currentPage = Number(action.payload.currentPage);
      localStorage.setItem('limit', JSON.stringify(state.limit));
      localStorage.setItem('currentPage', JSON.stringify(state.currentPage));
    },
  },
});

export const { addDuck, removeDuck, setQuery } = basketSlice.actions;

export default basketSlice.reducer;
