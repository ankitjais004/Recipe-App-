import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Router , { Link , Route , RouteHandler , Redirect } from "react-router";

import {logIn} from "../actions/actions.js";

class LogInPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = { "NoticeBoard" : "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    var email = ReactDOM.findDOMNode(this.refs.mailAddress).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    var data = {
      email,
      password
    }
    if(!email || !password) {
      this.setState({
        notice_board : "Please provide both email address and password"
      });
      return false;
    }
    else {
      this.props.dispatch(logIn(data)).then(() => this.context.history.pushState(null, '/UserPage'))
           }
  };

    render() {
        return (
            <div>
              <div className="homeLoginSignUpHeader">
                <nav className="headerLinkOptions">
                  <Link to="/home"> <b> Home </b> </Link> &nbsp; &nbsp;
                  <Link to="/SignUpPage"> <b> Sign Up </b> </Link> &nbsp; &nbsp;
                  <a href='#'><b> About </b> </a>
                </nav>
              </div>
              <div className="logInFormHolder">
                <form className='LoginForm' onSubmit= { this.handleSubmit }>
                  <div className="noticeBoard">{ this.state.NoticeBoard }</div>
                  <label> Enter Your Email address </label> <br/>
                  <p><input type='email' placeholder='a@b.xyz' ref='mailAddress' /> </p>
                  <label> Enter Your Password </label> <br/>
                  <input type='password' placeholder="***********" ref='password' /><br/>
                  <p><Link to="/ForgetPassword"> Forgot password? </Link></p>
                  <p><input type='submit' value= 'LogIn' /></p>
                </form>
              </div>
            </div>
        );
  }
}

LogInPage.contextTypes = {
  history: React.PropTypes.object
};

function select(state) {
  return {
    logIn: state.logIn
  }
}
export default connect(select)(LogInPage)
