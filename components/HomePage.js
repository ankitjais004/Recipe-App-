import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

import LogInPage from "./LogInPage.js";
import SignUpPage from "./SignUpPage.js";

class HomePage extends React.Component{
 render(){
   return(
       <div className="homeLoginSignUpHeader" >
         <nav className="headerLinkOptions">
           <Link to="/SignUpPage"><b>Sign Up</b></Link>||
           <Link to="/LogInPage"><b>Log In</b></Link>||
           <a href="#"><b>About</b></a>
         </nav>
         { this.props.children }
       </div>
   )
 }
}

export default HomePage
