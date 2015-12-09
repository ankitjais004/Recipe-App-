export const ADD_RECIPE = 'ADD_RECIPE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const RECIPES = 'RECIPES'

import recipesApi from '../apiCalls/recipesApi.js'
import loginApi from '../apiCalls/loginApi.js'
import signupApi from '../apiCalls/signupApi.js'
import updateRecipeApi from '../apiCalls/updateRecipeApi.js'
import recipeApi from '../apiCalls/recipeApi.js'

export function signUp(text) {
  return{
    type: SIGN_UP,
    payload: signupApi(text)
  }
}

export function logIn(text) {
  let payload;
  if(localStorage.id){
    payload = Promise.resolve({
      id: localStorage.id,
      first_name: localStorage.userName,
      email: localStorage.email
    });
  }
  else {
    payload = loginApi(text)
  }

  return{
    type: LOG_IN,
    payload
  }
}

export function logOut() {
  return{
    type: LOG_OUT,
    payload: Promise.resolve(true)
  }
}

export function addRecipe(text) {
  return {
    type: ADD_RECIPE,
    payload: recipeApi(text)
  }
}

export function updateRecipe(text){
  return {
    type: UPDATE_RECIPE,
    payload: updateRecipeApi(text)
  }
}

export function recipes(text){
  return {
    type: RECIPES,
    payload: recipesApi(text)
  }
}
