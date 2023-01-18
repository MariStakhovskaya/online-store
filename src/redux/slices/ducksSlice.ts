import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../App';

//export const fetchDucks = createAsyncThunk(
//  'ducks/fetchDucksStatus',
//  async () => {
//    const { data } = await axios.get(
//      'https://631e4b429f946df7dc40b245.mockapi.io/ducks'
//    );
//    return data;
//  }
//);

export interface DucksState {
  ducks: Array<ProductType>;
  //status: string;
}

const initialState: DucksState = {
  ducks: [],
  //status: 'loading', //'loading' || 'succsess' || 'error'
};

export const ducksSlice = createSlice({
  name: 'ducks',
  initialState,
  reducers: {
    setReduxDucks: (state, action: PayloadAction<Array<ProductType>>) => {
      return { ...state, ducks: action.payload };
    },
  },
});

export const { setReduxDucks } = ducksSlice.actions;

export default ducksSlice.reducer;
