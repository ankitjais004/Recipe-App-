import  React from "react";
import "../stylesheet/index.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, Link , Redirect } from 'react-router';
import ReactDOM from "react-dom";
import recipeApp from '../reducers/reducer.js'
import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
    basename: '/components'
});

import HomePage from "./HomePage.jsx";
import LogInPage from "./LogInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import ForgetPassword from "./ForgetPassword.jsx";
import UserPage from "./UserPage.jsx";
import ShowRecipe from "./ShowRecipe.jsx";

let store = createStore(recipeApp);

const routes = (
    <Route>
      <Route path="/" component={ HomePage }>
        <Redirect from="home" to="/" />
      </Route>
      <Route path="/SignUpPage" component={ SignUpPage } />
      <Route path="ForgetPassword" component={ ForgetPassword }/>
      <Route path="/LogInPage" component={ LogInPage } />
      <Route path="/UserPage" component={ UserPage } />
      <Route name="ShowRecipe" path="/ShowRecipe/:recipeId" component={ ShowRecipe } />

    </Route>
);

ReactDOM.render((
    <Provider store={store}>
      <Router history={ history } routes={routes}/>
    </Provider>
), document.querySelector(".main"));
