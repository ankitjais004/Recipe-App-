export const ADD_RECIPE = 'ADD_RECIPE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP'

import loginApi from '../apiCalls/loginApi.js'
import signupApi from '../apiCalls/signupApi.js'
import recipeApi from '../apiCalls/recipeApi.js'

export function signUp(text) {
  return{
    type: SIGN_UP,
    payload: signupApi(text)
  }
}

export function logIn(text) {
  return{
    type: LOG_IN,
    payload: loginApi(text)
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
