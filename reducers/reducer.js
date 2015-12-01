import {combineReducers } from 'redux'
import { ADD_RECIPE, LOG_IN} from '../actions/actions.js'

function recipes(state = [], action) {
  switch (action.type) {
  case ADD_RECIPE:
    return [
        ...state,
      {
        RecipeName: action.text.RecipeName,
        RecipeType: action.text.RecipeType,
        RecipeIngredients: action.text.RecipeProcess,
        RecipeProcess: action.text.RecipeProcess,
        RecipeNote: action.text.RecipeNote
      }
    ]
  default: return state;
  }
}
function logIn(state= [], action) {

  switch(action.type) {
  case LOG_IN:
    return [ {
      id: action.payload.id,
      userName: action.payload.first_name,
      email: action.payload.email
    }
           ]
    default: return state;
    }
}


const recipeApp = combineReducers({
  recipes,
  logIn
});
export default recipeApp
