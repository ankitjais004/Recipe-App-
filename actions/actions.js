export const ADD_RECIPE = 'ADD_RECIPE';
export const CHECK_BUTTON = 'CHECK_BUTTON';

export function addRecipe(text) {
 // console.log(text.RecipeName);
  return { type: ADD_RECIPE, text }
}

export function checkButton(text) {
  //console.log(text)
  return { type: CHECK_BUTTON, text}
}
