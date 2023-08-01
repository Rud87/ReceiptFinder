import { configureStore } from '@reduxjs/toolkit';
import recipeReducer, { removeFromFavorites } from './recipeSlice';

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;
