import fetch from 'isomorphic-fetch'

export default function recipesApi(text){
  console.log(text)
  var obj = {
    method: 'GET',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    body: "recipe[user_id]="+text
    }

  return fetch("http://localhost:3000/api/recipes", obj)
    .then((d) => {console.log(d.json())})
}
