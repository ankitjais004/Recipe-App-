import fetch from 'isomorphic-fetch'

export default function updateRecipeApi(text){

  var obj = {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    body: "recipe[name]="+text.RecipeName +"&recipe[description]="+text.RecipeProcess+
      "&recipe[user_id]="+text.UserId+ "&recipe[brand_id]="+text.BrandId + "&recipe[recipe_detail_attributes][details]="+text.RecipeNote
    }

  return fetch("http://localhost:3000/api/recipes", obj)
    .then((d) => {return d.json()})
}
