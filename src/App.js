import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Favorites from './components/Favorites';
import ShoppingList from './components/ShoppingList';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className='div'>
        <SearchBar />
        <RecipeList />
        <RecipeDetails />
        <Favorites />
        <ShoppingList />
      </div>
    </Provider>
  );
};

export default App;
