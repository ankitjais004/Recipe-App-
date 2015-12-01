export const ADD_RECIPE = 'ADD_RECIPE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT'
import login from '../apiCalls/apicalls.js'


export function logIn(text) {
  return{
    type: LOG_IN,
    payload: login(text)

  }
}
export function addRecipe(text) {
  return { type: ADD_RECIPE, text }
}
