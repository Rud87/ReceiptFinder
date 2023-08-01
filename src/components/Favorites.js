import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/recipeSlice';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  margin-bottom: 20px;
`;

const FavoriteTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fca311;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Favorites = () => {
  const favorites = useSelector((state) => state.recipe.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (recipeId) => {
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <FavoritesContainer>
      <FavoriteTitle>Favorites</FavoriteTitle>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <RemoveButton onClick={() => handleRemoveFromFavorites(recipe.id)}>
            Remove
          </RemoveButton>
        </div>
      ))}
    </FavoritesContainer>
  );
};

export default Favorites;
