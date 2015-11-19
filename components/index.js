import  React from "react";
import "../stylesheet/index.css";
import { Router, Route, Link , Redirect } from 'react-router';
import ReactDOM from "react-dom";

import { createHistory, useBasename } from 'history';
const history = useBasename(createHistory)({
  basename: '/components'
})

import HomePage from "./HomePage.js";
import LogInPage from "./LogInPage.js";
import SignUpPage from "./SignUpPage.js";
import ForgetPassword from "./ForgetPassword.js";


ReactDOM.render((
    <Router history={ history } >

      <Route>

        <Route path="/" component={ HomePage }>
          <Redirect from="home" to="/" />
        </Route>
        <Route path="/SignUpPage" component={ SignUpPage } />
        <Route path="ForgetPassword" component={ ForgetPassword }/>

        <Route path="/LogInPage" component={ LogInPage } />

      </Route>

    </Router>
), document.querySelector(".main"));
