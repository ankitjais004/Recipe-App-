import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

import LogInPage from "./LogInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

class HomePage extends React.Component{
  render() {
    return(
      <div className="homeLoginSignUpHeader">
        <nav className="headerLinkOptions">
          <Link to="/UserPage"> <b> User Page </b> </Link> &nbsp; &nbsp;
          <Link to="/SignUpPage"> <b> Sign Up </b> </Link> &nbsp; &nbsp;
          <Link to="/LogInPage"> <b> Log In </b> </Link> &nbsp; &nbsp;
          <a href="#"><b>About</b></a>

        </nav>
        { this.props.children }
      </div>
    )
  }
}

export default HomePage
