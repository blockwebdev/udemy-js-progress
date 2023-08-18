import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
/*
if (module.hot) {
  module.hot.accept();
};
*/
const controlRecipes = async function () {
  try {
    // Get hash id from search bar
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();
    // 1) LOADING RECIPE
    await model.loadRecipe(id); // recipe is loaded here and will..

    // 2) Rendering recipe
    recipeView.render(model.state.recipe); // data received from loadRecipe(id)
    
  } catch (err) {
    recipeView.renderError();
  }
  
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    
    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    // getSearchResultsPage() empty () is same as setting to 1
    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  };
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);
  // Update the recipe view
  recipeView.render(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  
};
init();



