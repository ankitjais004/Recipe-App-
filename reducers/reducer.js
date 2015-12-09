import {combineReducers } from 'redux'
import { ADD_RECIPE, LOG_IN, LOG_OUT, SIGN_UP, RECIPES } from '../actions/actions.js'

function recipes(state = [], action) {
  switch (action.type) {

  case LOG_IN:
    return [
        ...state,
        ...action.payload.recipes.map((recipe) =>{
          return ({
            RecipeID: recipe.id,
            RecipeName: recipe.name,
            RecipeProcess: recipe.description,
            RecipeBrand: recipe.brand_id,
            RecipeUserId: recipe.user_id
          });
        })
    ]
  case ADD_RECIPE:
    return [
        ...state,
      {
        RecipeID: action.payload.id,
        RecipeName: action.payload.name,
        RecipeProcess: action.payload.description,
        RecipeBrand: action.payload.brand_id,
        RecipeUserId: action.payload.user_id
      }
    ]
  case LOG_OUT:
    return []
  default: return state;
  }
}
function user(state= [], action) {

  switch(action.type) {
  case SIGN_UP:
    return [
      {
        id: action.payload.id,
        userName: action.payload.first_name,
        email: action.payload.email
      }
    ]

  case LOG_IN:
    return [ {
      id: action.payload.id,
      userName: action.payload.first_name,
      email: action.payload.email
    }
           ]
  case LOG_OUT:
    return [];

  default: return state;
  }
}

  const recipeApp = combineReducers({
    recipes,
    user
  });
  export default recipeApp
