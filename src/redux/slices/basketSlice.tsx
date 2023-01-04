import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../App';

export interface DucksState {
  ducks: Array<ProductType>;
  totalPrice: number;
}

const initialState: DucksState = {
  ducks: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addDuck(state, action: PayloadAction<ProductType>) {
      state.ducks.push(action.payload);
      state.totalPrice = state.ducks.reduce((sum, duck) => {
        return duck.price + sum;
      }, 0);
    },
    removeDuck(state, action: PayloadAction<ProductType>) {
      state.ducks.forEach((el, i) => {
        if (el.id === action.payload.id) state.ducks.splice(i, 1);
      });
      state.totalPrice = state.ducks.reduce((sum, duck) => {
        return duck.price + sum;
      }, 0);
    },
  },
});

export const { addDuck, removeDuck } = basketSlice.actions;

export default basketSlice.reducer;
