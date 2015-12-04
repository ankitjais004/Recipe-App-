import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

import {signUp} from "../actions/actions.js";

class SignUpPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var confirm_password = ReactDOM.findDOMNode(this.refs.confirm_password).value.trim();
        if(!first_name || !last_name || !email ||!password || !confirm_password) {
            console.log("Pls enter")
        }else{
            var data = {
                first_name,
                last_name,
                email,
                password,
                confirm_password
            }
            this.props.dispatch(signUp(data)).then(() => this.context.history.pushState(null, '/UserPage'))

        }

        ReactDOM.findDOMNode(this.refs.first_name).value = '';
        ReactDOM.findDOMNode(this.refs.lastt_name).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
        ReactDOM.findDOMNode(this.refs.confirm_password).value = '';
    };

    render() {
        return (
            <div>
              <div className='homeLoginSignUpHeader'>
                <nav className="headerLinkOptions">
                  <Link to="/home"> <b> Home </b> </Link> &nbsp; &nbsp;
                  <Link to="/LogInPage"> <b> LogIn </b> </Link> &nbsp; &nbsp;
                  <a href='#'> <b> About </b> </a>
                </nav>
              </div>


              <div className="signUpFormHolder">
                <form className='signUpForm' onSubmit= { this.handleSubmit }>

                  <label className="fields">*First Name :</label>
                  &nbsp;
                  <input type='text' placeholder='Type here..' ref='first_name' /> <br/>
                  <label className="fields">*Last Name :</label>
                  &nbsp;
                  <input type='text' placeholder='Type here..' ref='last_name' /> <br/>
                  <label className="fields">*Email- Address : </label>
                  &nbsp;
                  <input type='email' placeholder='Type here..' ref='email' /> <br/>
                  <label className="fields">*Password :</label>
                  &nbsp;
                  <input type='password' placeholder="Enter Your Password" ref='password' /> <br/>
                  <label className="fields">*Confirm Password :</label>
                  &nbsp;
                  <input type='password' placeholder="Enter Your Password again" ref='confirm_password' /> <br/>
                  <label className="submitLabel"><input type='submit' value= 'SignUp' /> </label>
                </form>
              </div>
              { this.props.children }
            </div>
        );
    }
}
SignUpPage.contextTypes = {
    history: React.PropTypes.object
};

function select(state) {
    return {
            user: state.user
        }
}
export default connect(select)(SignUpPage)
