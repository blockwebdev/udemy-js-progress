import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
/*
const renderSpinner = function (parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
*/
const controlRecipes = async function () {
  try {
    // Get hash id from search bar
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();
    // 1) LOADING RECIPE
    await model.loadRecipe(id); // recipe is loaded here and will..
                                // be stored into the state object
    
    /*
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      //"https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data); // not needed
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log(recipe);
    */
    // 2) Rendering recipe
    recipeView.render(model.state.recipe); // data received from loadRecipe(id)
                                          // passed into the render method by 
                                          // model.state.recipe, then recipeView.js
  } catch (err) {
    alert(err);
  }
};

// Instead of the following:
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes); -- use the following:
['haschange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));


