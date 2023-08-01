import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  margin-bottom: 20px;
`;

const RecipeTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipe.recipes);

  if (!Array.isArray(recipes)) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeContainer key={recipe.id}>
          <RecipeTitle>{recipe.title}</RecipeTitle>
        </RecipeContainer>
      ))}
    </div>
  );
};

export default RecipeList;
