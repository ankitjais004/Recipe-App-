import fetch from 'isomorphic-fetch'

export default function login(text){

  var obj = {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "user[password]="+text.password +"&user[email]="+text.email
    }


  return fetch("http://localhost:3000/api/sessions", obj)
    .then((d) => {if(d.status===401) {
      alert("Invalid Email Or Password")
      }
                  else {
                    return d.json() }
                  })
  }
