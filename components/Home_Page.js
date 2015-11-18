import React from "react";

import LogIn from "./Login_Page.js";
//import Sign_Up from "./Sign_Up.js";

class Home extends React.Component{
 render(){
   return(
     <div>
       <div class="header" >
         <nav class="options">
           <h3>Sign Up</h3>
           <h3>Log In</h3>
           <a href="#"><h3>About</h3></a>
         </nav>
       </div>
     </div>
   )
 }
}

export default Home
