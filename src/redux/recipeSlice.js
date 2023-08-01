import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const API_URL = 'www.themealdb.com/api/json/v1/1/categories.php'; 

export const fetchRecipes = createAsyncThunk(
  'recipe/fetchRecipes',
  async (query) => {
    const response = await axios.get(`${API_URL}/recipes`, {
      params: {
        query,
        apiKey: API_KEY,
      },
    });
    return response.data;
  }
);

export const addToFavorites = createAsyncThunk(
  'recipe/addToFavorites',
  async (recipe) => {
    return recipe;
  }
);

export const removeFromFavorites = createAsyncThunk(
  'recipe/removeFromFavorites',
  async (recipeId) => {
    return recipeId;
  }
);

export const addToShoppingList = createAsyncThunk(
  'recipe/addToShoppingList',
  async (ingredient) => {
    return ingredient;
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'recipe/removeFromShoppingList',
  async (ingredient) => {
    return ingredient;
  }
);

export const clearShoppingList = createAsyncThunk(
  'recipe/clearShoppingList',
  async () => {
    return;
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [],
    selectedRecipe: null,
    favorites: [],
    shoppingList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(addToShoppingList.fulfilled, (state, action) => {
        state.shoppingList.push(action.payload);
      })
      .addCase(removeFromShoppingList.fulfilled, (state, action) => {
        state.shoppingList = state.shoppingList.filter(
          (ingredient) => ingredient !== action.payload
        );
      })
      .addCase(clearShoppingList.fulfilled, (state) => {
        state.shoppingList = [];
      });
  },
});

export default recipeSlice.reducer;
