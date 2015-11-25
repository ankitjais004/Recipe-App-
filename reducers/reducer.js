import {combineReducers } from 'redux'
import { ADD_RECIPE, CHECK_BUTTON} from '../actions/actions.js'

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
function checkButton(state= [], action) {
  switch(action.type) {
  case CHECK_BUTTON:
    return [
        ...state,
      {
        text: action.text
      }

    ]
  default: return state;
  }
}

const recipeApp = combineReducers({
  recipes,
  checkButton
});
export default recipeApp
