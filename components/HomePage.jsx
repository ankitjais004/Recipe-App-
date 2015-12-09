import React from "react";
import ReactDOM from "react-dom";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";
import { connect } from "react-redux";
import LogInPage from "./LogInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import {logIn, recipes } from "../actions/actions.js"

class HomePage extends React.Component{

    constructor(props, context){
        super(props, context);

    }
    componentWillMount(){
        if(localStorage.id){
            this.props.dispatch(logIn())
                //this.props.dispatch(recipes(localStorage.id))
                .then(() => this.context.history.pushState(null, '/UserPage'))
        }
    }

    render() {
        return(
            <div className="homeLoginSignUpHeader">
              <nav className="headerLinkOptions">
                <Link to="/SignUpPage"> <b> Sign Up </b> </Link> &nbsp; &nbsp;
                <Link to="/LogInPage"> <b> Log In </b> </Link> &nbsp; &nbsp;
                <a href="#"><b>About</b></a>

              </nav>
              { this.props.children }
            </div>
        )
    }
}
HomePage.contextTypes = {
    history: React.PropTypes.object
};

function select(state) {
    //console.log(state.user[0])
        return {
            user: state.user[0]
        }
}

export default connect(select)(HomePage)
