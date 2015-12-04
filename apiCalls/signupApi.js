import fetch from 'isomorphic-fetch'

export default function signup(text) {

  var obj = {
    method: 'POST',
    headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "user[first_name]="+text.first_name + "&user[last_name]="+text.last_name + "&user[email]="+ text.email +
      "&user[password_authentication_attributes][password]="+text.password+
      "&user[password_authentication_attributes][password_confirmation]="+ text.confirm_password
  }

  return fetch("http://localhost:3000/api/users", obj)
    .then((d) =>  {if(d.status===201) {
      alert("You are successfully Signed In")
                   return d.json()
                   }
                   else {
                     alert("There is some problem in SignUp")
                      }
                  })
}
