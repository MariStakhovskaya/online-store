import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import ducksReducer from './slices/ducksSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    ducks: ducksReducer,
  },
});
console.log(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
