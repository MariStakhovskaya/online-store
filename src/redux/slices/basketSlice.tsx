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
      let num = 0;
      if (state.ducks.find((duck) => duck.id === action.payload.id)) {
        state.ducks.forEach((duck, i) => {
          if (duck.id === action.payload.id) num = i;
        });
        state.ducks[num].count = state.ducks[num].count + 1;
      } else state.ducks.push({ ...action.payload, count: 1 });
      state.totalPrice = state.ducks.reduce((sum, duck) => {
        return duck.price * duck.count + sum;
      }, 0);
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
    },
  },
});

export const { addDuck, removeDuck } = basketSlice.actions;

export default basketSlice.reducer;
