import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

import LogInPage from "./LogInPage.js";
import SignUpPage from "./SignUpPage.js";

class HomePage extends React.Component{
 render(){
   return(
     <div>
       <div class="header" >
         <nav class="options">
           <Link to="/SignUpPage"><h3>Sign Up</h3></Link>
           <Link to="/LogInPage"><h3>Log In</h3></Link>
           <a href="#"><h3>About</h3></a>
         </nav>
       </div>
       { this.props.children }
     </div>
   )
 }
}

export default HomePage
