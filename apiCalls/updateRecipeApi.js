//import fetch from 'isomorphic-fetch'

export default function updateRecipeApi(text){

  var obj = {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: "recipe[id]="+text.RecipeID+"&recipe[name]="+text.RecipeName +"&recipe[description]="+text.RecipeProcess+
      "&recipe[user_id]="+text.UserId+ "&recipe[brand_id]="+text.BrandId + "&recipe[recipe_detail_attributes][details]="+text.RecipeNote+"&_method=PUT"
  }
  return fetch("http://localhost:3000/api/recipes/"+text.RecipeID, obj)
    .then((d) => {alert("Recipe Updated")})
}
