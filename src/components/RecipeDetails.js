import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/recipeSlice';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  margin-bottom: 20px;
`;

const RecipeTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AddToFavoritesButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fca311;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const RecipeDetails = () => {
  const recipe = useSelector((state) => state.recipe.selectedRecipe);
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(recipe));
  };

  return (
    <RecipeContainer>
      <RecipeTitle>{recipe ? recipe.title : ''}</RecipeTitle>
      {recipe && (
        <AddToFavoritesButton onClick={handleAddToFavorites}>
          Add to Favorites
        </AddToFavoritesButton>
      )}
    </RecipeContainer>
  );
};

export default RecipeDetails;
