import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromShoppingList, clearShoppingList } from '../redux/recipeSlice';
import styled from 'styled-components';

const ShoppingListContainer = styled.div`
  margin-bottom: 20px;
`;

const ShoppingListTitle = styled.h2`
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

const ClearButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fca311;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius:7px
`;

const ShoppingList = () => {
  const shoppingList = useSelector((state) => state.recipe.shoppingList);
  const dispatch = useDispatch();

  const handleRemoveFromShoppingList = (ingredient) => {
    dispatch(removeFromShoppingList(ingredient));
  };

  const handleClearShoppingList = () => {
    dispatch(clearShoppingList());
  };

  return (
    <ShoppingListContainer>
      <ShoppingListTitle>Shopping List</ShoppingListTitle>
      {shoppingList.map((ingredient) => (
        <div key={ingredient}>
          <p>{ingredient}</p>
          <RemoveButton onClick={() => handleRemoveFromShoppingList(ingredient)}>
            Remove
          </RemoveButton>
        </div>
      ))}
      <ClearButton onClick={handleClearShoppingList}>Clear All</ClearButton>
    </ShoppingListContainer>
  );
};

export default ShoppingList;
